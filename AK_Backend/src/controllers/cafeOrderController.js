const { query } = require('express');
const sql = require('../config/database'); 
const moment = require('moment');

const createCafeOrder = async (req, res) => {
    const {
        cafe_id,
        route_id,
        order_date,
        total_amount,
        tax,
        delivery_charges,
        payment_status,
        note,
        delivery_status,
        cafe_invoice_id,
        cafe_order_delivery_id,
        products // Array of products to add to order details
    } = req.body;

    // Validate the main order fields
    if (!cafe_id || !route_id || !order_date || !total_amount || !products || products.length === 0) {
        return res.status(400).json({ message: 'All fields are required, and at least one product must be provided.' });
    }

    // Validate each product
    for (let product of products) {
        const { product_id, description, quantity, rate, sub_total_amount } = product;
        if (!product_id || !description || !quantity || !rate || !sub_total_amount) {
            return res.status(400).json({ message: 'All product fields are required.' });
        }
    }
    try {
        // console.log("totalbb",  order_number)
        // Call the stored procedure to create the cafe order
      const [result] =  await sql.query('CALL CreateCafeOrder(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @order_id, @p_code, @order_number)', [
            cafe_id,
            route_id,
            order_date,
            total_amount ,
            tax,
            delivery_charges,
            payment_status,
            note,
            delivery_status,
            cafe_invoice_id,
            cafe_order_delivery_id
        ]);
     console.log("result",result)
        // Retrieve the generated order ID from the OUT parameter
        const [outParam] = await sql.query('SELECT @order_id AS order_id, @order_number AS order_number');
        const cafe_order_id = outParam[0]?.order_id;
        const order_number = outParam[0]?.order_number;

        // Check if the order was created successfully
        if (!cafe_order_id|| !order_number) {
            return res.status(500).json({ message: 'Failed to create cafe order and order number. No order ID returned.' });
        }

        // Insert products into the cafe_order_details table
        for (let product of products) {
            const { product_id, description, quantity, rate, sub_total_amount } = product;

            await sql.query('CALL CreateCafeOrderDetails(?, ?, ?, ?, ?, ?, ?)', [
                cafe_order_id, // The order ID created from the previous step
                cafe_id,
                product_id,
                description,
                quantity,
                rate,
                sub_total_amount
            ]);
        }

        // Return success response
        return res.status(201).json({ 
            message: 'Cafe order and order details created successfully.', 
            order_number 
        });
    } catch (error) {
        console.error('Error creating cafe order:', error);

        // Return error response
        return res.status(500).json({ 
            message: 'Internal Server Error', 
            error: error.message 
        });
    }
};

const getAllCafeOrders = async (req, res) => {
    try {
        // Call the stored procedure to get all cafe orders
        const [rows] = await sql.query('CALL GetAllCafeOrders()');

        // Check if rows exist
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No cafe orders found.' });
        }

        // Adjust timezone for dates
        const orders = rows[0].map((order) => ({
            ...order,
            order_date: moment(order.order_date).format('YYYY-MM-DD HH:mm:ss'),
        }));

        return res.status(200).json({
            message: 'Cafe orders retrieved successfully.',
            orders,
        });
    } catch (error) {
        console.error('Error retrieving cafe orders:', error);
        return res.status(500).json({ 
            message: 'Internal Server Error', 
            error: error.message 
        });
    }
};

const findCafeOrderByCafeId = async (req, res) => {
    // const { cafe_id } = req.params;
    const cafe_id = parseInt(req.params.id, 10);

    // Validate the input
    if (!cafe_id) {
        return res.status(400).json({ 
            message: 'Cafe ID is required.' 
        });
    }

    try {
        // Call the stored procedure
        const [results] = await sql.query('CALL FindCafeOrderBycafeId(?)', [cafe_id]);

        // The result of a stored procedure is usually wrapped in an array
        if (!results || results.length === 0) {
            return res.status(404).json({ 
                message: 'No orders found for the specified cafe ID.' 
            });
        }

        // Return the retrieved cafe orders
        return res.status(200).json({
            message: 'Cafe orders retrieved successfully.',
            data: results[0] // The first index contains the data
        });

    } catch (error) {
        console.error('Error fetching cafe orders:', error);

        // Return error response
        return res.status(500).json({ 
            message: 'Internal Server Error', 
            error: error.message 
        });
    }
};


// Delete Cafe Order
const deleteCafeOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await sql.query('CALL DeleteCafeOrder(?)', [id]);
        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe Order not found or already deleted.' });
        }

        // Return a success message
        return res.status(200).json({ message: 'Cafe Order deleted successfully.' });
    } catch (error) {
        console.error('Error deleting cafe order:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// update Cafe Order
const updateCafeOrderById = async (req, res) => {
    const { id } = req.params;  // Get the cafe_order_id from the route parameters
    const {
        cafe_id,
        route_id,
        order_date,
        total_amount,
        tax,
        delivery_charges,
        payment_status,
        delivery_status,
        cafe_invoice_id,
        cafe_order_delivery_id,
        note
    } = req.body;  // Get the updated data from the request body

    // Validate that the cafe_order_id is valid
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid or missing cafe_order_id.' });
    }

    // Validate that all required fields are provided

    try {
        // Call the stored procedure to update the cafe order by id
        const [result] = await sql.query('CALL UpdateCafeOrderById(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            id,
            cafe_id,
            route_id,
            order_date,
            total_amount,
            tax,
            delivery_charges,
            payment_status,
            delivery_status,
            cafe_invoice_id,
            cafe_order_delivery_id,
            note
        ]);

        // If no rows are affected, the order doesn't exist or no changes were made
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe order not found or no changes made.' });
        }

        // Success response
        return res.status(200).json({
            message: 'Cafe order updated successfully.'
        });
    } catch (error) {
        console.error('Error updating cafe order:', error);
        return res.status(500).json({
            message: 'An error occurred while updating the cafe order.',
            error: error.message
        });
    }
};

// Update Payment Status and Delivary Status 
const updatePaymentAndDeliveryStatus = async (req, res) => {
    const { id } = req.params; 
    const { payment_status, delivery_status } = req.body;

    try {
        // Call the stored procedure
        await sql.query('CALL UpdatePaymentAndDeliveryStatus(?, ?, ?)', [
            id,
            payment_status,
            delivery_status,
        ]);

        // Return success response
        return res.status(200).json({
            message: 'Payment and delivery status updated successfully.',
        });
    } catch (error) {
        console.error(' :', error);

        // Return error response
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};


module.exports = {createCafeOrder, getAllCafeOrders, findCafeOrderByCafeId, deleteCafeOrder, updateCafeOrderById, updatePaymentAndDeliveryStatus}
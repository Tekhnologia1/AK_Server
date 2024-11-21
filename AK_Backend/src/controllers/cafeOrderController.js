const { query } = require('express');
const sql = require('../config/database'); 
const moment = require('moment');

const createCafeOrder = async (req, res) => {
    const {
        cafe_id,
        route_id,
        order_number,
        order_date,
        total_amount,
        tax,
        delivery_charges,
        payment_status,
        payment_term_id,
        note,
        products // Array of products to add to order details
    } = req.body;

    // Validate the main order fields
    if (!cafe_id || !route_id || !order_number || !order_date || !total_amount || payment_status === undefined || !payment_term_id || !products || products.length === 0) {
        return res.status(400).json({ message: 'All fields are required and at least one product must be provided.' });
    }

    // Validate product array
    for (let product of products) {
        const { product_id, description, quantity, rate, sub_total_amount } = product;
        if (!product_id || !description || !quantity || !rate || !sub_total_amount) {
            return res.status(400).json({ message: 'All product fields are required.' });
        }
    }

    try {
        // Call the stored procedure to create the cafe order
        const result = await sql.query('CALL CreateCafeOrder(?, ?, ?, ?, ?, ?, ?, ?, ?,?, @order_id)', [
            cafe_id,
            route_id,
            order_number,
            order_date,
            total_amount,
            tax,
            delivery_charges,
            payment_status,
            payment_term_id,
            note
        ]);
        const [outParam] = await sql.query('SELECT @order_id AS order_id');

        const cafe_order_id = outParam[0].order_id; 
        // Check if the result is as expected
        if (!cafe_order_id) {
            return res.status(500).json({ message: 'Failed to create cafe order. No order ID returned.' });
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

        return res.status(201).json({ message: 'Cafe order and order details created successfully.', cafe_order_id });
    } catch (error) {
        console.error('Error creating cafe order:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
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

const findCafeOrderById = async (req, res) => {
    const { id } = req.params; 
    try {
        const [rows] = await sql.query('CALL FindCafeOrderById(?)', [id]);

        // Check if any results were returned
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'Cafe Order not found.' });
        }

        // Return the order details
        return res.status(200).json({
            message: 'Cafe Order retrieved successfully.',
            orderDetails: rows[0] 
        });
    } catch (error) {
        console.error('Error retrieving cafe order :', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
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
        order_number,
        order_date,
        total_amount,
        tax,
        delivery_charges,
        payment_status,
        delivery_status,
        cafe_invoice_id,
        cafe_order_delivery_id,
        payment_term_id
    } = req.body;  // Get the updated data from the request body

    // Validate that the cafe_order_id is valid
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid or missing cafe_order_id.' });
    }

    // Validate that all required fields are provided

    try {
        // Call the stored procedure to update the cafe order by id
        const [result] = await sql.query('CALL UpdateCafeOrderById(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            id,
            cafe_id,
            route_id,
            order_number,
            order_date,
            total_amount,
            tax,
            delivery_charges,
            payment_status,
            delivery_status,
            cafe_invoice_id,
            cafe_order_delivery_id,
            payment_term_id
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


module.exports = {createCafeOrder, getAllCafeOrders, findCafeOrderById, deleteCafeOrder, updateCafeOrderById}
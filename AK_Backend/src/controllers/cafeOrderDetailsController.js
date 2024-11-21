const { query } = require('express');
const sql = require('../config/database'); 

const createCafeOrderDetails = async (req, res) => {
    const {
        cafe_id,
        product_id,
        description,
        quantity,
        rate,
        sub_total_amount,
        received_quantity
    } = req.body;

    // Validate input
    if (!cafe_id || !product_id || !description || !quantity || !rate || !sub_total_amount || !received_quantity) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the stored procedure to create cafe order details
        await sql.query('CALL CreateCafeOrderDetails(?, ?, ?, ?, ?, ?, ?, ?)', [
            cafe_id,
            product_id,
            description,
            quantity,
            rate,
            sub_total_amount,
            received_quantity
        ]);

        return res.status(201).json({ message: 'Cafe order details created successfully.' });
    } catch (error) {
        console.error('Error creating cafe order details:', error);
        
        // Handle specific error cases
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// const GetAllCafeOrderDetailsByOrderId = async (req, res) => {
//     try {
//         const { id } = req.params; 

//         // Ensure 'id' is provided
//         if (!id) {
//             return res.status(400).json({ message: 'Order ID is required' });
//         }

//         // Call the stored procedure with the 'id' parameter
//         const [orderDetails] = await sql.query('CALL GetAllCafeOrderDetailsByOrderId(?)', [id]);

//         // Return the order details
//         return res.status(200).json(orderDetails);
//     } catch (error) {
//         console.error('Error retrieving cafe order details:', error);
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// };

const GetAllCafeOrderDetails = async (req, res) => {
    try {
        const [CafeOrder] = await sql.query('CALL GetAllCafeOrderDetailsByOrderId()');
        return res.status(200).json(CafeOrder); // Return the list of cafe users
    } catch (error) {
        console.error('Error retrieving cafe users:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


const findCafeOrderDetailsById = async (req, res) => {
    const { id } = req.params; // Assuming the ID is passed as a route parameter

    try {
        const [rows] = await sql.query('CALL FindCafeOrderDetailsById(?)', [id]);

        // Check if any results were returned
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'Order details not found.' });
        }

        // Return the order details
        return res.status(200).json({
            message: 'Order details retrieved successfully.',
            orderDetails: rows[0] // Assuming the first result contains the details
        });
    } catch (error) {
        console.error('Error retrieving cafe order details:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteCafeOrderDetailsById = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await sql.query('CALL DeleteCafeOrderDetailsById(?)', [id]);
        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Order details not found or already deleted.' });
        }

        // Return a success message
        return res.status(200).json({ message: 'Order details deleted successfully.' });
    } catch (error) {
        console.error('Error deleting cafe order details:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateCafeOrderDetailsById = async (req, res) => {
    const { id } = req.params; // Assuming the ID is passed as a route parameter
    const { product_id, ProductName, description, quantity, rate, sub_total_amount, received_quantity } = req.body; // Get updated data from request body

    // Validate input
    if (!product_id || !description || !quantity || !rate || !sub_total_amount || !received_quantity) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const [result] = await sql.query('CALL UpdateCafeOrderDetailsById(?, ?, ?, ?, ?, ?, ?, ?)', [
            id,
            product_id,
            ProductName,
            description,
            quantity,
            rate,
            sub_total_amount,
            received_quantity
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Order details not found.' });
        }

        // Return a success message
        return res.status(200).json({ message: 'Order details updated successfully.' });
    } catch (error) {
        console.error('Error updating cafe order details:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {createCafeOrderDetails, GetAllCafeOrderDetails, findCafeOrderDetailsById, deleteCafeOrderDetailsById, updateCafeOrderDetailsById}
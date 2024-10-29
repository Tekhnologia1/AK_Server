const { query } = require('express');
const sql = require('../config/database'); 

// Create Cafe Order
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
        delivery_status,
        cafe_invoice_id,
        cafe_order_delivery_id,
        payment_term_id
    } = req.body;

    // Validate input
    if (!cafe_id || !route_id || !order_number || !order_date || !total_amount || !tax || !delivery_charges || payment_status === undefined || delivery_status === undefined || !cafe_invoice_id || !cafe_order_delivery_id || !payment_term_id) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the stored procedure to create the cafe order
        await sql.query('CALL CreateCafeOrder(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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

        return res.status(201).json({ message: 'Cafe order created successfully.' });
    } catch (error) {
        console.error('Error creating cafe order:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {createCafeOrder}
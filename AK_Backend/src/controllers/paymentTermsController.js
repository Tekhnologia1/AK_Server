const { query } = require('express');
const sql = require('../config/database'); 

const createPaymentTerm = async (req, res) => {
    const { name, days } = req.body; // Get the payment term details from request body

    // Validate input
    if (!name || typeof days !== 'number') {
        return res.status(400).json({ message: 'Name and days are required.' });
    }

    try {
        // Call the stored procedure to create a payment term
        await sql.query('CALL CreatePaymentTerms(?, ?)', [name, days]);

        return res.status(201).json({ message: 'Payment term created successfully.' });
    } catch (error) {
        console.error('Error creating payment term:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllPaymentTerms = async (req, res) => {
    try {
        // Call the stored procedure to get all payment terms
        const [paymentTerms] = await sql.query('CALL GetAllPaymentTerms()');

        return res.status(200).json(paymentTerms); // Return the list of payment terms
    } catch (error) {
        console.error('Error retrieving payment terms:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {createPaymentTerm, getAllPaymentTerms}
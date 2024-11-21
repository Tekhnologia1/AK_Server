const { query } = require('express');
const sql = require('../config/database'); 

const createInvoiceDetails = async (req, res) => {
    const {
        cafe_invoices_id,
        cafe_id,
        product_id,
        description,
        quantity,
        rate,
        sub_total_amount,
    } = req.body;

    // Validate input fields
    if (
        !cafe_invoices_id ||
        !cafe_id ||
        !product_id ||
        !description ||
        !quantity ||
        !rate ||
        sub_total_amount === undefined
    ) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        const [result] = await sql.query(
            'CALL CreateInvoiceDetails(?, ?, ?, ?, ?, ?, ?)',
            [
                cafe_invoices_id,
                cafe_id,
                product_id,
                description,
                quantity,
                rate,
                sub_total_amount,
            ]
        );
        // Respond with success
        return res.status(201).json({ message: 'Invoice details created successfully.' });
    } catch (error) {
        console.error('Error creating invoice details:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


const getAllInvoiceDetails = async (req, res) => {
    try {
        const [InvoiceDetails] = await sql.query('CALL GetAllInvoiceDetals()');
        res.status(200).json({
            message: 'Invoice Details retrieved successfully.',
            InvoiceDetails,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteInvoiceDetails = async (req, res) => {
    const invoiceDetails = parseInt(req.params.id, 10); 
    if (!invoiceDetails) {
        return res.status(400).json({ message: 'Invoice Details ID is required.' });
    }
    try {
        const result = await sql.query('CALL DeleteInvoiceDetails(?)', [invoiceDetails]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Invoice Details not found.' });
        }
        return res.status(200).json({ message: 'Invoice details deleted successfully.' });
    } catch (error) {
        console.error('Error deleting product:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateInvoiceDetails = async (req, res) => {
    const invoiceDetailsId = parseInt(req.params.id, 10); // Get the invoice details ID from request parameters
    const {
        cafe_id,
        product_id,
        description,
        quantity,
        rate,
        sub_total_amount,
        received_quantity,
    } = req.body;

    // Validate input
    if (isNaN(invoiceDetailsId)) {
        return res.status(400).json({ message: 'Invalid invoice details ID.' });
    }

    if (!cafe_id || !product_id || quantity == null || rate == null || sub_total_amount == null) {
        return res
            .status(400)
            .json({ message: 'Cafe ID, product ID, quantity, rate, and sub-total amount are required.' });
    }

    try {
        // Call the stored procedure
        const [result] = await sql.query('CALL UpdateInvoiceDetails(?, ?, ?, ?, ?, ?, ?, ?)', [
            invoiceDetailsId,
            cafe_id,
            product_id,
            description || null, 
            quantity,
            rate,
            sub_total_amount,
            received_quantity || null, 
        ]);

        // Response handling
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Invoice details not found or no changes made.' });
        }

        return res.status(200).json({ message: 'Invoice details updated successfully.' });
    } catch (error) {
        console.error('Error updating invoice details:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};



module.exports = { createInvoiceDetails, getAllInvoiceDetails, deleteInvoiceDetails, updateInvoiceDetails}
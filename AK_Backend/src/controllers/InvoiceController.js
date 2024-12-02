const { query } = require('express');
const sql = require('../config/database'); 

const createInvoice = async (req, res) => {
    const {
        cafe_id,
        cafe_order_id,
        invoice_date,
        total_amount,
        tax,
        discount,
        payment_id,
        payment_term_id,
        invoice_due_date,
        created_by,
        products // Array of products to add to invoice details
    } = req.body;

    // Validate the main invoice fields
    if (!cafe_id || !cafe_order_id || !invoice_date || !total_amount || !products || products.length === 0) 
        {
        return res.status(400).json({ 
            message: 'All fields are required, and at least one product must be provided.' 
        });
    }

    // Validate each product in the array
    for (let product of products) {
        const { product_id, description, quantity, rate, sub_total_amount } = product;
        if (!product_id || !description || !quantity || !rate || !sub_total_amount ) {
            return res.status(400).json({ 
                message: 'All product fields are required, including received quantity.' 
            });
        }
    }

    try {
        // Call the stored procedure to create the invoice
        const result = await sql.query('CALL CreateInvoice(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @invoices_id, @p_code, @invoice_number)', [
                cafe_id,
                cafe_order_id,
                invoice_date,
                total_amount,
                tax,
                discount,
                payment_id,
                payment_term_id,
                invoice_due_date,
                created_by
            ]
        );

        // Retrieve the generated invoice ID and number from OUT parameters
        const [outParams] = await sql.query('SELECT @invoices_id AS invoices_id, @invoice_number AS invoice_number');
        const cafe_invoices_id = outParams[0]?.invoices_id;
        const invoice_number = outParams[0]?.invoice_number;
// console.log("cafe_invoices_id, invoice_number :", outParams, cafe_invoices_id, invoice_number);

        // Check if the invoice was created successfully
        if (!cafe_invoices_id || !invoice_number) {
            return res.status(500).json({ 
                message: 'Failed to create invoice. No invoice ID or number returned.' 
            });
        }

        // Insert products into the invoice details table
        for (let product of products) {
            const { product_id, description, quantity, rate, sub_total_amount } = product;
          await sql.query('CALL CreateInvoiceDetails(?, ?, ?, ?, ?, ?, ?)', [
                cafe_invoices_id,
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
            message: 'Invoice and invoice details created successfully.',
            invoice_number
        });
        
    } catch (error) {
        console.error('Error creating invoice:', error);

        // Return error response
        return res.status(500).json({ 
            message: 'Internal Server Error', 
            error: error.message 
        });
    }
};


const getAllInvoices = async (req, res) => {
    try {
        const [Invoice] = await sql.query('CALL GetAllInvoice()');
        res.status(200).json({
            message: 'Cafe Invoice retrieved successfully.',
            Invoice,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteInvoice = async (req, res) => {
    const id = parseInt(req.params.id, 10); 
    // Validate input
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid Invoice ID.' });
    }
    try {
        const result = await sql.query('CALL DeleteInvoice(?)', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Invoice not found.' });
        }
        return res.status(200).json({ message: 'Invoice deleted successfully.' });
    } catch (error) {
        console.error('Error deleting Invoice:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const UpdateInvoice = async (req, res) => {
    const i_id = parseInt(req.params.id, 10);
    const {
        cafe_id,
        cafe_order_id,
        invoice_number,
        invoice_date,
        total_amount,
        tax,
        delivery_charges,
        discount,
        payment_id,
        payment_date,
        payment_status,
        note,
        payment_term_id,
        invoice_due_date,
        updated_by
    } = req.body;
       // Validate input
       if (!i_id || isNaN(i_id)) {
        return res.status(400).json({ message: "Invalid or missing Invoice ID (i_id)." });
    }
    if (!cafe_id || isNaN(cafe_id)) {
        return res.status(400).json({ message: "Invalid or missing cafe_id." });
    }
    try {
        const [result] = await sql.query(
            "CALL UpdateInvoice(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                i_id,
                cafe_id,
                cafe_order_id,
                invoice_number,
                invoice_date,
                total_amount,
                tax || null,
                delivery_charges,
                discount || null,
                payment_id || null,
                payment_date || null,
                payment_status,
                note || null,
                payment_term_id,
                invoice_due_date,
                updated_by
            ]
        );

        // Debug: Log result for better insight
        console.log("Procedure result:", result);

        // Check if the stored procedure made changes
        if (result.affectedRows === 0 || !result) {
            return res.status(404).json({ message: "Invoice not found or no changes made." });
        }

        return res.status(200).json({ message: "Invoice updated successfully." });
    } catch (error) {
        // Debug: Log error for better insight
        console.error("Error updating Invoice:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};




module.exports = {createInvoice, getAllInvoices, deleteInvoice, UpdateInvoice}
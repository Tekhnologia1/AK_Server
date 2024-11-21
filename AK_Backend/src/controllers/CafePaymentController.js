const { query } = require('express');
const sql = require('../config/database'); 
const moment = require('moment');


const createCafePayment = async (req, res) => {
    const {
        cafe_id,
        cafe_order_id,
        cafe_invoice_id,
        amount,
        payment_date,
        payment_status,
        note,
        discount,
    } = req.body;

    // Validate input fields
    if (!cafe_id || !cafe_order_id  || !amount || !payment_date || payment_status === undefined) {
        return res.status(400).json({ message: 'All fields are required except note.' });
    }

    try {
        // Call the stored procedure to create a cafe payment
        const result = await sql.query(
            'CALL CreateCafePayment(?, ?, ?, ?, ?, ?, ?, ?)', 
            [cafe_id, cafe_order_id, cafe_invoice_id, amount, payment_date, payment_status, note || null, discount]
        );

        return res.status(201).json({
            message: 'Cafe payment created successfully.',
            result,
        });
    } catch (error) {
        // console.error('Error creating cafe payment:', error);
        return res.status(500).json({ 
            message: 'Internal Server Error', 
            error: error.message,
        });
    }
};

const getAllCafePayments = async (req, res) => {
    try {
        const [CafePayment] = await sql.query('CALL GetAllCafePayment()');
       
        if (!CafePayment || CafePayment.length === 0) {
            return res.status(404).json({ message: 'No Cafe Payment found.' });
        }
      
        // Adjust timezone for dates
        const payments = CafePayment[0].map((payment) => ({
            ...payment,
            payment_date: moment(payment.payment_date).format('YYYY-MM-DD HH:mm:ss'),
        }));

        return res.status(200).json(payments); 
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete Cafe Payments
const deleteCafePayment = async (req, res) => {
    const { id } = req.params;

    // Validate the `id` parameter
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid or missing payment ID.' });
    }

    try {
        // Call the stored procedure to delete the payment
        const [result] = await sql.query('CALL DeleteCafePayments(?)', [id]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment not found.' });
        }

        // Respond with success
        return res.status(200).json({ message: 'Cafe payment deleted successfully.' });
    } catch (error) {
        console.error('Error deleting cafe payment:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// update Cafe Payment
const updateCafePayment = async (req, res) => {
    const { id } = req.params; 
    const {
        cafe_id,
        cafe_order_id,
        cafe_invoice_id,
        amount,
        payment_date,
        payment_status,
        note,
        discount,
    } = req.body;

     // Validate input fields
     if (
        !id ||
        !cafe_id ||
        !cafe_order_id ||
        !cafe_invoice_id ||
        amount === undefined ||
        !payment_date ||
        payment_status === undefined 
    ) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        // Call the stored procedure to update the cafe payment
        const [result] = await sql.query('CALL UpdateCafePayment(?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            id,
            cafe_id,
            cafe_order_id,
            cafe_invoice_id,
            amount,
            payment_date,
            payment_status,
            note,
            discount,
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment not found or no changes made.' });
        }

        // Respond with success
        return res.status(200).json({ message: 'Cafe payment updated successfully.' });
    } catch (error) {
        console.error('Error updating cafe payment:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};



module.exports ={createCafePayment, getAllCafePayments, deleteCafePayment, updateCafePayment};
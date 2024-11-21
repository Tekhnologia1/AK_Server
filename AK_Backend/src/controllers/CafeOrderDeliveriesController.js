const { query } = require('express');
const sql = require('../config/database'); 

const createCafeOrderDelivery = async (req, res) => {
    const { 
        cafe_id,
        cafe_order_id,
        cafe_invoice_id,
        delivery_vendor_id,
        delivery_weight,
        delivery_type,
        delivery_charges,
        delivery_packing_type,
        delivery_box_charges,
        deliver_total_charges,
        note
    } = req.body;

    
    try {
        await sql.query('CALL CreateCafeOrderDeliveries(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            cafe_id,
            cafe_order_id,
            cafe_invoice_id,
            delivery_vendor_id,
            delivery_weight,
            delivery_type,
            delivery_charges,
            delivery_packing_type,
            delivery_box_charges,
            deliver_total_charges,
            note
        ]);
        return res.status(201).json({ message: 'Cafe order delivery created successfully.' });
    } catch (error) {
        console.error('Error creating Cafe order delivery:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAllCafeOrderDeliveries = async (req, res) => {
    try {
        // Call the stored procedure to get all cities
        const [deliveries] = await sql.query('CALL GetAllCafeOrderDeliveries()');

        return res.status(200).json(deliveries); // Send the cities in the response
    } catch (error) {
        console.error('Error retrieving cities:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};



module.exports = {createCafeOrderDelivery, getAllCafeOrderDeliveries};

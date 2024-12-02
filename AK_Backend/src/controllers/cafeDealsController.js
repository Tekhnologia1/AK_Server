const { query } = require('express');
const sql = require('../config/database'); 

const createCafeDeal = async (req, res) => {
    const { cafe_id, cafe_user_id, employee_id, product_id, deal_price} = req.body;

    // Validate input
    if (!cafe_id || !product_id || !deal_price) {
        return res.status(400).json({ message: 'Cafe ID, product_id and deal_priceare required.' });
    }

    try {
        // Call the stored procedure to create a cafe deal
        await sql.query('CALL CreateCafeDeals(?, ?, ?, ?, ?)', [
            cafe_id,
            cafe_user_id,
            employee_id,
            product_id,
            deal_price
        ]);

        return res.status(201).json({ message: 'Cafe deal created successfully.' });
    } catch (error) {
        console.error('Error creating cafe deal:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllCafeDeals = async (req, res) => {
    try {
        // Call the stored procedure to get all cafe deals
        const [cafeDeals] = await sql.query('CALL GetAllCafeDeals()');

        return res.status(200).json(cafeDeals); // Return the list of cafe deals
    } catch (error) {
        console.error('Error retrieving cafe deals:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const findCafeDealsById = async (req, res) => {
    const cafeDealId = parseInt(req.params.id, 10); // Get the cafe deal ID from request parameters

    // Validate input
    if (isNaN(cafeDealId)) {
        return res.status(400).json({ message: 'Invalid cafe deal ID.' });
    }

    try {
        // Call the stored procedure to find cafe deal by ID
        const [cafeDeal] = await sql.query('CALL FindCafeDealsById(?)', [cafeDealId]);

        // Check if the cafe deal was found
        if (cafeDeal.length === 0) {
            return res.status(404).json({ message: 'Cafe deal not found.' });
        }

        return res.status(200).json(cafeDeal[0]); // Return the cafe deal details
    } catch (error) {
        console.error('Error retrieving cafe deal by ID:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteCafeDeals = async (req, res) => {
    const cafeDealId = parseInt(req.params.id, 10); // Get the cafe deal ID from request parameters

    // Validate input
    if (isNaN(cafeDealId)) {
        return res.status(400).json({ message: 'Invalid cafe deal ID.' });
    }
            
    try {
        // Call the stored procedure to delete the cafe deal
        const [result] = await sql.query('CALL DeleteCafeDeal(?)', [cafeDealId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe deal not found.' });
        }

        return res.status(200).json({ message: 'Cafe deal deleted successfully.' });
    } catch (error) {
        console.error('Error deleting cafe deal:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateCafeDeals = async (req, res) => {
    const cafeDealId = parseInt(req.params.id, 10); // Get the cafe deal ID from request parameters
    const {
            cafe_id,
            cafe_user_id,
            employee_id,
            product_id,
            deal_price
    } = req.body; // Get the cafe deal details from request body

    // Validate input
    if (isNaN(cafeDealId)) {
        return res.status(400).json({ message: 'Invalid cafe deal ID.' });
    }
    if (!cafe_id || !product_id || !deal_price) {
        return res.status(400).json({ message: 'Cafe ID, product_id and deal_price are required.' });
    }

    try {
        // Call the stored procedure to update the cafe deal
        const [result] = await sql.query('CALL UpdateCafeDeals(?, ?, ?, ?, ?, ?)', [
            cafeDealId,
            cafe_id,
            cafe_user_id,
            employee_id,
            product_id,
            deal_price
        ]);
        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe deal not found.' });
        }

        return res.status(200).json({ message: 'Cafe deal updated successfully.' });
    } catch (error) {
        console.error('Error updating cafe deal:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};



module.exports = {createCafeDeal, getAllCafeDeals, findCafeDealsById, deleteCafeDeals, updateCafeDeals}
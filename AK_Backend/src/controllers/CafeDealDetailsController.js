const { query } = require('express');
const sql = require('../config/database'); 

const createCafeDealDetails = async (req, res) => {
    const {
        cafe_id,
        product_id,
        deal_price
    } = req.body; // Get the details from request body

    // Validate input
    if (!cafe_id || !product_id || !deal_price) {
        return res.status(400).json({ message: 'Cafe ID, product ID, and deal price are required.' });
    }

    try {
        // Call the stored procedure to create cafe deal details
        await sql.query('CALL CreateCafeDealsDetails(?, ?, ?)', [
            cafe_id,
            product_id,
            deal_price
        ]);

        return res.status(201).json({ message: 'Cafe deal details created successfully.' });
    } catch (error) {
        console.error('Error creating cafe deal details:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllCafeDealsDetails = async (req, res) => {
    try {
        // Call the stored procedure to get all cafe deal details
        const [cafeDealDetails] = await sql.query('CALL GetAllCafeDealsDetails()');

        return res.status(200).json(cafeDealDetails); // Return the list of cafe deal details
    } catch (error) {
        console.error('Error retrieving cafe deal details:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getCafeDealsDetailsById = async (req, res) => {
    const cafeDealDetailId = parseInt(req.params.id, 10); // Get the ID from request parameters

    // Validate input
    if (isNaN(cafeDealDetailId)) {
        return res.status(400).json({ message: 'Invalid cafe deal detail ID.' });
    }

    try {
        // Call the stored procedure to get cafe deal details by ID
        const [cafeDealDetail] = await sql.query('CALL GetCafeDealsDetailsById(?)', [cafeDealDetailId]);

        if (cafeDealDetail.length === 0) {
            return res.status(404).json({ message: 'Cafe deal detail not found.' });
        }

        return res.status(200).json(cafeDealDetail[0]); // Return the found cafe deal detail
    } catch (error) {
        console.error('Error retrieving cafe deal detail:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteCafeDealDetail = async (req, res) => {
    const cafeDealDetailId = parseInt(req.params.id, 10); // Get the ID from request parameters

    // Validate input
    if (isNaN(cafeDealDetailId)) {
        return res.status(400).json({ message: 'Invalid cafe deal detail ID.' });
    }

    try {
        const [result] = await sql.query('CALL DeleteCafeDealDetail(?)', [cafeDealDetailId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe deal detail not found.' });
        }

        return res.status(200).json({ message: 'Cafe deal detail deleted successfully.' });
    } catch (error) {
        console.error('Error deleting cafe deal detail:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateCafeDealDetail = async (req, res) => {
    const cafeDealDetailId = parseInt(req.params.id, 10); // Get the ID from request parameters
    const {
        cafe_id, 
        product_id, 
        deal_price
    } = req.body; // Get the details from request body

    // Validate input
    if (isNaN(cafeDealDetailId)) {
        return res.status(400).json({ message: 'Invalid cafe deal detail ID.' });
    }
    if (!cafe_id || !product_id || !deal_price) {
        return res.status(400).json({ message: 'Cafe ID, product ID, and deal price are required.' });
    }

    try {
        const [result] = await sql.query('CALL UpdateCafeDealDetail(?, ?, ?, ?)', [
            cafeDealDetailId,
            cafe_id, 
            product_id, 
            deal_price
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe deal detail not found.' });
        }

        return res.status(200).json({ message: 'Cafe deal detail updated successfully.' });
    } catch (error) {
        console.error('Error updating cafe deal detail:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {createCafeDealDetails, getAllCafeDealsDetails, getCafeDealsDetailsById, deleteCafeDealDetail, updateCafeDealDetail}
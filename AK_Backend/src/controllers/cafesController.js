const { query } = require('express');
const sql = require('../config/database'); 

const createCafe = async (req, res) => {
    const {
        franchise_id,
        name,
        address,
        area,
        route_id,
        cities_id,
        special_deal,
        payment_term_id,
        contact_person
    } = req.body;

    // Validate input
    if (!name || !address || !area || !route_id || !cities_id || !contact_person) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const [result] = await sql.query('CALL CreateCafe(?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            franchise_id,
            name,
            address,
            area,
            route_id,
            cities_id,
            special_deal,
            payment_term_id,
            contact_person
        ]);

        return res.status(201).json({ message: 'Cafe created successfully'});
    } catch (error) {
        console.error('Error creating cafe:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllCafes = async (req, res) => {
    try {
        // Call the stored procedure to get all cafes
        const [cafes] = await sql.query('CALL GetAllCafes()');

        return res.status(200).json(cafes); // Return the cafes
    } catch (error) {
        console.error('Error retrieving cafes:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const findCafeById = async (req, res) => {
    const cafeId = parseInt(req.params.id, 10); // Get the cafe ID from request parameters

    // Validate input
    if (isNaN(cafeId)) {
        return res.status(400).json({ message: 'Invalid cafe ID.' });
    }

    try {
        const [result] = await sql.query('CALL FindCafeById(?)', [cafeId]);
        const cafe = result[0]; // Assuming the cafe data is in the first element of the array

        if (!cafe) {
            return res.status(404).json({ message: 'Cafe not found.' });
        }

        return res.status(200).json(cafe);
    } catch (error) {
        console.error('Error fetching cafe by ID:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


const deleteCafeById = async (req, res) => {
    const cafeId = parseInt(req.params.id, 10); // Get the cafe ID from request parameters

    // Validate input
    if (isNaN(cafeId)) {
        return res.status(400).json({ message: 'Invalid cafe ID.' });
    }

    try {
        const result = await sql.query('CALL DeleteCafe(?)', [cafeId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe not found.' });
        }

        return res.status(200).json({ message: 'Cafe deleted successfully.' });
    } catch (error) {
        console.error('Error deleting cafe:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


const updateCafe = async (req, res) => {
    const cafeId = parseInt(req.params.id, 10); // Get the cafe ID from request parameters
    const {
        franchise_id,
        name,
        address,
        area,
        route_id,
        cities_id,
        special_deal,
        payment_term_id,
        contact_person,
    } = req.body;

    // Validate the cafe ID
    if (isNaN(cafeId)) {
        return res.status(400).json({ message: 'Invalid cafe ID.' });
    }

    // Validate required fields
    if (!name || !address || area == null) {
        return res.status(400).json({ message: 'Cafe name, address, and area are required.' });
    }

    try {
        // Execute the stored procedure
        const [result] = await sql.query('CALL UpdateCafe(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            franchise_id,
            cafeId, // Note: Ensure cafe ID is passed as the second argument
            name,
            address,
            area,
            route_id,
            cities_id,
            special_deal,
            payment_term_id,
            contact_person,
        ]);

        // Response handling
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe not found or no changes made.' });
        }

        return res.status(200).json({ message: 'Cafe updated successfully.' });
    } catch (error) {
        console.error('Error updating cafe:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};





module.exports = {createCafe, getAllCafes, deleteCafeById, findCafeById, updateCafe}
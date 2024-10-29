const { query } = require('express');
const sql = require('../config/database'); 

const createArea = async (req, res) => {
    const { name, cities_id, area_details } = req.body;

    // Validate input
    if (!name || !cities_id || !area_details) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the stored procedure to create an area
        await sql.query('CALL CreateAreas(?, ?, ?)', [name, cities_id, area_details]);

        return res.status(201).json({ message: 'Area created successfully' });
    } catch (error) {
        console.error('Error creating area:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAllAreas = async (req, res) => {
    try {
        // Call the stored procedure to get all areas
        const [areas] = await sql.query('CALL getAllAreas()');

        return res.status(200).json(areas); // Send the areas in the response
    } catch (error) {
        console.error('Error retrieving areas:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const findAreaById = async (req, res) => {
    const areaId = parseInt(req.params.id, 10); // Get the area ID from request parameters

    // Validate input
    if (isNaN(areaId)) {
        return res.status(400).json({ message: 'Invalid area ID.' });
    }

    try {
        // Call the stored procedure to find the area by ID
        const [area] = await sql.query('CALL FindAreaById(?)', [areaId]);

        // Check if the area was found
        if (area.length === 0) {
            return res.status(404).json({ message: 'Area not found.' });
        }

        return res.status(200).json(area[0]); // Return the area
    } catch (error) {
        console.error('Error retrieving area:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteAreaById = async (req, res) => {
    const areaId = parseInt(req.params.id, 10); // Get the area ID from request parameters
    // Validate input
    if (isNaN(areaId)) {
        return res.status(400).json({ message: 'Invalid area ID.' });
    }
    try {
        const [result] = await sql.query('CALL DeleteAreaById(?)', [areaId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Area not found.' });
        }
        return res.status(200).json({ message: 'Area deleted successfully.' });
    } catch (error) {
        console.error('Error deleting area:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateAreaById = async (req, res) => {
    const areaId = parseInt(req.params.id, 10); // Get the area ID from request parameters
    const {
        name, cities_id, area_details
    } = req.body; // Get the area details from request body

    // Validate input
    if (isNaN(areaId)) {
        return res.status(400).json({ message: 'Invalid area ID.' });
    }
    if (!name || !cities_id || !area_details) {
        return res.status(400).json({ message: 'Area name, city ID, and details are required.' });
    }
    try {
        // Call the stored procedure to update the area
        const [result] = await sql.query('CALL UpdateAreaById(?, ?, ?, ?)', [
            areaId,
            name, cities_id, area_details
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Area not found.' });
        }
        return res.status(200).json({ message: 'Area updated successfully.' });
    } catch (error) {
        console.error('Error updating area:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};




module.exports = {createArea, getAllAreas, findAreaById, deleteAreaById, updateAreaById}
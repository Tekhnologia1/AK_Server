const { query } = require('express');
const sql = require('../config/database'); 

const createFranchise = async (req, res) => {
    const {
        name,
        origin_city,
        owner_name,
        owner_contact,
        owner_add,
        location
    } = req.body;

    // Validate input
    if (!name || !origin_city || !owner_name || !owner_contact) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        await sql.query('CALL CreateFranchises(?, ?, ?, ?, ?, ?)', [
            name,
            origin_city,
            owner_name,
            owner_contact,
            owner_add,
            location
        ]);

        return res.status(201).json({ message: 'Franchise created successfully.' });
    } catch (error) {
        console.error('Error creating franchise:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllFranchises = async (req, res) => {
    try {
        // Call the stored procedure to get all franchises
        const [franchises] = await sql.query('CALL GetAllFranchises()');

        // Check if the result is not empty
        if (franchises.length === 0) {
            return res.status(404).json({ message: 'No franchises found.' });
        }

        return res.status(200).json(franchises); // Return the list of franchises
    } catch (error) {
        console.error('Error retrieving franchises:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


const findFranchiseById = async (req, res) => {
    const franchiseId = parseInt(req.params.id, 10); // Get the franchise ID from request parameters

    // Validate input
    if (isNaN(franchiseId)) {
        return res.status(400).json({ message: 'Invalid franchise ID.' });
    }

    try {
        const [result] = await sql.query('CALL FindFranchisesById(?)', [franchiseId]);
        const franchise = result[0]; // Assuming the franchise data is in the first element of the array

        if (!franchise) {
            return res.status(404).json({ message: 'Franchise not found.' });
        }

        return res.status(200).json(franchise);
    } catch (error) {
        console.error('Error fetching franchise by ID:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteFranchiseById = async (req, res) => {
    const franchiseId = parseInt(req.params.id, 10); // Get the franchise ID from request parameters

    // Validate input
    if (isNaN(franchiseId)) {
        return res.status(400).json({ message: 'Invalid franchise ID.' });
    }

    try {
        const result = await sql.query('CALL DeleteFranchise(?)', [franchiseId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Franchise not found.' });
        }

        return res.status(200).json({ message: 'Franchise deleted successfully.' });
    } catch (error) {
        console.error('Error deleting franchise:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateFranchiseById = async (req, res) => {
    const franchiseId = parseInt(req.params.id, 10); // Get the franchise ID from request parameters
    const {
        name,
        origin_city,
        owner_name,
        owner_contact,
        owner_add,
        location
    } = req.body;

    // Validate input
    if (isNaN(franchiseId)) {
        return res.status(400).json({ message: 'Invalid franchise ID.' });
    }

    // Check if required fields are present
    if (!name || !origin_city || !owner_name || !owner_contact) {
        return res.status(400).json({ message: 'Name, origin city, owner name, and owner contact are required.' });
    }

    try {
        const result = await sql.query('CALL UpdateFranchiseById(?, ?, ?, ?, ?, ?, ?)', [
            franchiseId,
            name,
            origin_city,
            owner_name,
            owner_contact,
            owner_add,
            location
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Franchise not found.' });
        }

        return res.status(200).json({ message: 'Franchise updated successfully.' });
    } catch (error) {
        console.error('Error updating franchise:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {createFranchise, getAllFranchises, findFranchiseById, deleteFranchiseById, updateFranchiseById}
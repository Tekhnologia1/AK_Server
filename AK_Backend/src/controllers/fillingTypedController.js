const { query } = require('express');
const sql = require('../config/database'); 

const createFillingType = async (req, res) => {
    const { name, description } = req.body;

    // Validate input
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required.' });
    }
    try {
        await sql.query('CALL CreateFillingType(?, ?)', [name, description]);

        return res.status(201).json({ message: 'Filling type created successfully.' });
    } catch (error) {
        console.error('Error creating filling type:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAllFillingTypes = async (req, res) => {
    try {
        // Call the stored procedure to get all filling types
        const [fillingTypes] = await sql.query('CALL GetAllFillingTypes()');

        return res.status(200).json(fillingTypes); // Return the filling types
    } catch (error) {
        console.error('Error retrieving filling types:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const findFillingTypeById = async (req, res) => {
    const fillingTypeId = parseInt(req.params.id, 10); // Get the filling type ID from request parameters

    // Validate input
    if (isNaN(fillingTypeId)) {
        return res.status(400).json({ message: 'Invalid filling type ID.' });
    }

    try {
        // Call the stored procedure to find the filling type by ID
        const [fillingType] = await sql.query('CALL FindFillingTypeById(?)', [fillingTypeId]);

        // Check if the filling type was found
        if (fillingType.length === 0) {
            return res.status(404).json({ message: 'Filling type not found.' });
        }

        return res.status(200).json(fillingType[0]); // Return the filling type
    } catch (error) {
        console.error('Error retrieving filling type:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteFillingTypeById = async (req, res) => {
    const fillingTypeId = parseInt(req.params.id, 10); // Get the filling type ID from request parameters

    // Validate input
    if (isNaN(fillingTypeId)) {
        return res.status(400).json({ message: 'Invalid filling type ID.' });
    }

    try {
        // Call the stored procedure to delete the filling type by ID
        const result = await sql.query('CALL DeleteFillingTypeById(?)', [fillingTypeId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Filling type not found.' });
        }

        return res.status(200).json({ message: 'Filling type deleted successfully.' });
    } catch (error) {
        console.error('Error deleting filling type:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {createFillingType, getAllFillingTypes, findFillingTypeById, deleteFillingTypeById}
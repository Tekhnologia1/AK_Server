const { query } = require('express');
const sql = require('../config/database'); 

const createUserType = async (req, res) => {
    const { name, details, super_user } = req.body;
    try {
        // Call the stored procedure to create a new user type
        await sql.query('CALL CreateUserType(?, ?, ?)', [name, details, super_user]);

        return res.status(201).json({ message: 'User type created successfully.' });
    } catch (error) {
        console.error('Error creating user type:', error);
        
        // Handle specific errors, such as duplicate entries
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'User type with this name already exists.' });
        }
        
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllUserTypes = async (req, res) => {
    try {
        // Call the stored procedure to get all user types
        const [userTypes] = await sql.query('CALL GetAllUserTypes()');

        return res.status(200).json(userTypes); // Return the list of user types
    } catch (error) {
        console.error('Error retrieving user types:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const findUserTypeById = async (req, res) => {
    const userTypeId = parseInt(req.params.id, 10); // Get the user type ID from request parameters

    // Validate input
    if (isNaN(userTypeId)) {
        return res.status(400).json({ message: 'Invalid user type ID.' });
    }

    try {
        // Call the stored procedure to get the user type by ID
        const [userType] = await sql.query('CALL FindUserTypeById(?)', [userTypeId]);

        if (userType.length === 0) {
            return res.status(404).json({ message: 'User type not found.' });
        }

        return res.status(200).json(userType[0]); // Return the user type
    } catch (error) {
        console.error('Error retrieving user type by ID:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteUserType = async (req, res) => {
    const userTypeId = parseInt(req.params.id, 10); // Get the user type ID from request parameters

    // Validate input
    if (isNaN(userTypeId)) {
        return res.status(400).json({ message: 'Invalid user type ID.' });
    }

    try {
        // Call the stored procedure to delete the user type
        const result = await sql.query('CALL DeleteUserType(?)', [userTypeId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User type not found.' });
        }

        return res.status(200).json({ message: 'User type deleted successfully.' });
    } catch (error) {
        console.error('Error deleting user type:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateUserType = async (req, res) => {
    const userTypeId = parseInt(req.params.id, 10); // Get the user type ID from request parameters
    const { name, details, super_user } = req.body; // Get the updated data from request body

    // Validate input
    if (isNaN(userTypeId)) {
        return res.status(400).json({ message: 'Invalid user type ID.' });
    }
    if (!name || !details) {
        return res.status(400).json({ message: 'Name and details are required.' });
    }

    try {
        // Call the stored procedure to update the user type
        const result = await sql.query('CALL UpdateUserTypeById(?, ?, ?, ?)', [
            userTypeId,
            name,
            details,
            super_user
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User type not found.' });
        }

        return res.status(200).json({ message: 'User type updated successfully.' });
    } catch (error) {
        console.error('Error updating user type:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {createUserType, getAllUserTypes, findUserTypeById, deleteUserType, updateUserType}
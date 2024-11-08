const { query } = require('express');
const sql = require('../config/database'); 


const createCafeUser = async (req, res) => {
    const {
        cafe_id,
        name,
        username,
        password,
        user_type_id,
        email,
        cell_number,
        status
    } = req.body;

    // Validate input
    if (!cafe_id || !name || !username || !password || !user_type_id || !email || !cell_number) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the stored procedure to create a cafe user
        const result = await sql.query('CALL CreateCafeUser(?, ?, ?, ?, ?, ?, ?, ?)', [
            cafe_id,
            name,
            username,
            password,
            user_type_id,
            email,
            cell_number,
            status
        ]);

        return res.status(201).json({ message: 'Cafe user created successfully.', userId: result.insertId });
    } catch (error) {
        console.error('Error creating cafe user:', error);

        // Handle specific error cases
        if (error.code === 'ER_DUP_ENTRY') { // Adjust based on your database's actual error handling
            return res.status(409).json({ message: 'Username or email already exists.' });
        }

        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllCafeUsers = async (req, res) => {
    try {
        // Call the stored procedure to get all cafe users
        const [cafeUsers] = await sql.query('CALL GetAllCafeUsers()');

        return res.status(200).json(cafeUsers); // Return the list of cafe users
    } catch (error) {
        console.error('Error retrieving cafe users:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const findCafeUserById = async (req, res) => {
    const userId = parseInt(req.params.id, 10); // Get the user ID from request parameters

    // Validate input
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID.' });
    }

    try {
        // Call the stored procedure to find a cafe user by ID
        const [cafeUser] = await sql.query('CALL FindCafeUserById(?)', [userId]);

        // Check if a user was found
        if (cafeUser.length === 0) {
            return res.status(404).json({ message: 'Cafe user not found.' });
        }

        return res.status(200).json(cafeUser[0]); // Return the found cafe user
    } catch (error) {
        console.error('Error retrieving cafe user:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteCafeUser = async (req, res) => {
    const userId = parseInt(req.params.id, 10); // Get the user ID from request parameters

    // Validate input
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID.' });
    }

    try {
        const result = await sql.query('CALL DeleteCafeUser(?)', [userId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe user not found.' });
        }

        return res.status(200).json({ message: 'Cafe user deleted successfully.' });
    } catch (error) {
        console.error('Error deleting cafe user:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateCafeUser = async (req, res) => {
    const userId = parseInt(req.params.id, 10); // Get the user ID from request parameters
    const {
         name, username, password, user_type_id, email, cell_number, status
    } = req.body;

    // Validate input
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID.' });
    }

    // Ensure required fields are present
    if (!name || !username || !email) {
        return res.status(400).json({ message: 'Name, username, and email are required.' });
    }

    try {
        const result = await sql.query('CALL UpdateCafeUser(?, ?, ?, ?, ?, ?, ?, ?)', [
            userId,
            name,
            username,
            password,
            user_type_id,
            email,
            cell_number,
            status
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cafe user not found.' });
        }

        return res.status(200).json({ message: 'Cafe user updated successfully.' });
    } catch (error) {
        console.error('Error updating cafe user:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {createCafeUser, getAllCafeUsers, findCafeUserById, deleteCafeUser, updateCafeUser}
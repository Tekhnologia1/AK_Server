const { query } = require('express');
const sql = require('../config/database'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
                // Hash the password before storing it
                const hashedPassword = await bcrypt.hash(password, 10);

        // Call the stored procedure to create a cafe user
        const result = await sql.query('CALL CreateCafeUser(?, ?, ?, ?, ?, ?, ?, ?)', [
            cafe_id,
            name,
            username,
            hashedPassword,  // Use the hashed password here
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

// login Cafe Users 
const loginCafeUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate input fields
    if (!username || !password) {
        return res.status(400).json({ message: 'Cafe ID, username, and password are required.' });
    }
    try {
        // Query the database to get the user data based on cafe_id and username
        const result = await sql.query('CALL LoginCafeUser(?)', [username]);
        const user = result[0][0]; // Assuming result[0][0] contains the user data
        // console.log("user ",user)
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or cafe ID.' });
        }

        // Check if the provided password matches the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password.' });
        }

        // If password is valid, generate a JWT token
        const token = jwt.sign(
            { cafe_id: user[0].cafe_id, user_type_id: user[0].user_type_id, cafe_users_id: user[0].cafe_users_id },
            'AKGoldenCrust@99', // Secret key
            { expiresIn: '10h' }  // Token expiration time
        );
        //  console.log("Token data view",jwt.decode(token));
        return res.status(200).json({
            message: 'Login successful.',
            token: token,
            cafeId: user.cafe_id,
            userTypeId: user.user_type_id,
            cafeUserId: user.cafe_users_id
        });
       
    } catch (error) {
        console.error('Error loggingCafe User in:', error);
        return res.status(500).json({ message: 'An error occurred while logging Cafe User in.', error: error.message });
    }
};


module.exports = {createCafeUser, getAllCafeUsers, findCafeUserById, deleteCafeUser, updateCafeUser, loginCafeUser}
const { query } = require('express');
const sql = require('../config/database'); 

const createCity = async (req, res) => {
    const { name } = req.body;

    // Validate input
    if (!name) {
        return res.status(400).json({ message: 'City name is required.' });
    }

    try {
        // Call the stored procedure
        await sql.query('CALL cities(?)', [name]);

        return res.status(201).json({ message: 'City created successfully' });
    } catch (error) {
        console.error('Error creating city:', error);
        
        // Check for specific error message for duplicate city
        if (error.sqlState === '23000') { // Adjust based on your database's actual error handling
            return res.status(400).json({ message: 'This city name already exists.' });
        }
        
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAllCities = async (req, res) => {
    try {
        // Call the stored procedure to get all cities
        const [cities] = await sql.query('CALL getAllCities()');

        return res.status(200).json(cities); // Send the cities in the response
    } catch (error) {
        console.error('Error retrieving cities:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};



module.exports = {createCity, getAllCities}
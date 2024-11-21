const { query } = require('express');
const sql = require('../config/database'); 
const { createFillingType } = require('./fillingTypedController');

const createRoute = async (req, res) => {
    const { name, route_details, route_start_point, route_end_point, cities_id, areas_id } = req.body;

    // Validate input
    if (!name || !route_details || !route_start_point || !route_end_point || !cities_id || !areas_id) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        // Call the stored procedure to create a route
        await sql.query('CALL CreateRoutes(?, ?, ?, ?, ?, ?)', [name, route_details, route_start_point, route_end_point, cities_id, areas_id]);

        return res.status(201).json({ message: 'Route created successfully' });
    } catch (error) {
        console.error('Error creating route:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAllRoutes = async (req, res) => {
    try {
        // Call the stored procedure to get all routes
        const [routes] = await sql.query('CALL GetAllRoutes()'); // Ensure you have this stored procedure defined

        return res.status(200).json(routes); // Send the routes in the response
    } catch (error) {
        console.error('Error retrieving routes:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const findRouteById = async (req, res) => {
    const routeId = parseInt(req.params.id, 10); // Get the route ID from the request parameters

    // Validate input
    if (!routeId) {
        return res.status(400).json({ message: 'Route ID is required.' });
    }

    try {
        // Call the stored procedure to find the route by ID
        const [route] = await sql.query('CALL FindRoutesById(?)', [routeId]);

        if (route.length === 0) {
            return res.status(404).json({ message: 'Route not found.' });
        }

        return res.status(200).json(route[0]); // Return the found route
    } catch (error) {
        console.error('Error retrieving route:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteRouteById = async (req, res) => {
    const routeId = parseInt(req.params.id, 10); // Get the route ID from the request parameters

    // Validate input
    if (!routeId) {
        return res.status(400).json({ message: 'Route ID is required.' });
    }

    try {
        // Call the stored procedure to delete the route by ID
        const result = await sql.query('CALL DeleteRoutesBYId(?)', [routeId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Route not found.' });
        }

        return res.status(200).json({ message: 'Route deleted successfully.' });
    } catch (error) {
        console.error('Error deleting route:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateRoute = async (req, res) => {
    const routeId = parseInt(req.params.id, 10); // Get the route ID from the request parameters
    const { name, route_details, route_start_point, route_end_point, cities_id, areas_id } = req.body;

    // Validate input
    if (!routeId || !name || !route_details || !route_start_point || !route_end_point || !cities_id || !areas_id) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the stored procedure to update the route
        const [result] = await sql.query('CALL UpdateRoutes(?, ?, ?, ?, ?, ?, ?)', [routeId, name, route_details, route_start_point, route_end_point, cities_id, areas_id]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Route not found.' });
        }
        
        return res.status(200).json({ message: 'Route updated successfully.' });
    } catch (error) {
        console.error('Error updating route:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};



module.exports = {createRoute, getAllRoutes, findRouteById, deleteRouteById, updateRoute}
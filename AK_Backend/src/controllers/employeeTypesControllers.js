const { query } = require('express');
const sql = require('../config/database'); 

// Add Employee Type
const create = async (req, res) => {
    console.log('Request Body:', req.body); 
    
    if (!req.body) {
        return res.status(400).json({ message: 'Request body cannot be empty' });
    }
    const { name, details, super_user, created_by } = req.body;

    // Validate required fields
    if (!name || !details || !created_by || typeof super_user !== 'boolean') {
        return res.status(400).json({ 
            message: 'All fields are required and super_user must be a boolean',
            received: req.body 
        });
    }

    try {
        // Call the stored procedure
        const rows = await sql.query('CALL CreateEmployeeType(?, ?, ?, ?)', [
            name,
            details,
            super_user,
            created_by
        ]);

        const employeeTypeId = rows[0]?.[0]?.employee_type_id;

        if (employeeTypeId) {
            return res.status(201).json({
                message: 'Employee Type added successfully',
                employeeTypeId: employeeTypeId,
                requestBody: req.body // Echo back the request body
            });
        }

        return res.status(500).json({ 
            message: 'An error occurred while adding the employee type',
            requestBody: req.body 
        });
    } catch (error) {
        console.error('Error adding employee type:', error);
        return res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};


// Get All Employee Types
const getAll = async (req, res) => {
    try {
        const result = await sql.query('CALL GetAllEmployeeTypes()');

        const employeeTypes = result[0];

        if (!employeeTypes || employeeTypes.length === 0) {
            return res.status(404).json({ message: 'No employee types found.' });
        }

        res.status(200).json({
            message: 'Employee types retrieved successfully.',
            employeeTypes
        });
    } catch (error) {
        console.error('Error retrieving employee types:', error.message || error);
        res.status(500).json({ message: 'An error occurred while retrieving employee types.' });
    }
};

// get single record with id wise 
const findEmployeeTypeById = async (req, res) => {
    const { id } = req.params; // Assuming you're passing the ID as a route parameter
     console.log('Received employee_type_id:', id);
    try {
        const rows = await sql.query('CALL FindEmployeeTypeById(?)', [id]);

        if (!rows[0] || rows[0].length === 0) {
            return res.status(404).json({ message: 'Employee type not found.' });
        }

        res.status(200).json({
            message: 'Employee type retrieved successfully.',
            employeeType: rows[0][0] // Since we're expecting a single record
        });
    } catch (error) {
        console.error('Error retrieving employee type:', error);
        res.status(500).json({ message: 'An error occurred while retrieving employee type.' });
    }
};



// Edit Employee Type
const updateEmployeeTypeById = async (req, res) => {
    const { id } = req.params; // Extracting employee type ID from request parameters
    const { name, details, super_user, updated_by } = req.body; // Extracting data from request body

    try {
        // Call the stored procedure to update the employee type
        const result = await sql.query('CALL UpdateEmployeeTypeById(?, ?, ?, ?, ?)', [
            id,
            name,
            details,
            super_user,
            updated_by
        ]);

        // Check if any rows were affected
        if (result[0].affectedRows === 0) {
            return res.status(404).json({ message: 'Employee type not found.' });
        }

        res.status(200).json({ message: 'Employee type updated successfully.' });
    } catch (error) {
        console.error('Error updating employee type:', error);
        res.status(500).json({ message: 'An error occurred while updating employee type.' });
    }
};

// Delete Employee Type
const deleteById = async (req, res) => {
    const { id } = req.params; // Extracting employee type ID from request parameters

    try {
        // Call the stored procedure to delete the employee type
        const result = await sql.query('CALL DeleteEmployeeTypeById(?)', [id]);

        // Check if any rows were affected
        if (result[0].affectedRows === 0) {
            return res.status(404).json({ message: 'Employee type not found.' });
        }

        res.status(200).json({ message: 'Employee type deleted successfully.' });
    } catch (error) {
        console.error('Error deleting employee type:', error);
        res.status(500).json({ message: 'An error occurred while deleting employee type.' });
    }
};




module.exports = { create, getAll, findEmployeeTypeById, deleteById, updateEmployeeTypeById };


const { query } = require('express');
const sql = require('../config/database'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment'); // Import moment.js
// const nodemailer = require('nodemailer');

// POST API to create a new employee
const createEmployee = async (req, res) => {
    const { 
        name, 
        username, 
        password, 
        employee_type_id, 
        email, 
        cell_number, 
        salary, 
        enrollment_datetime, 
        increament_datetime, 
        increament_amount, 
        created_by 
    } = req.body;
    // Validate required fields
    if (!name || !username || !password || !employee_type_id || !email || !cell_number) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        // Hash the password before storing it
        const hashedPassword = bcrypt.hashSync(password, 8);
        console.log(increament_datetime)
        // Call the stored procedure to create the employee, passing in the hashed password
        const result = await sql.query('CALL CreateEmployee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            name,
            username,
            hashedPassword,  // Use the hashed password here
            employee_type_id,
            email,
            cell_number,
            salary,
            enrollment_datetime,
            increament_datetime,
            increament_amount,
            created_by
        ]);
       // Check if insertion was successful
       if (!result[0]?.insertId) {
        // If the employee is successfully created, return the employee ID
        res.status(201).json({
            message: 'Employee created successfully. Employee ID: ' + result[0]?.insertId,
            employeeId: result[0]?.insertId  // Return the inserted employee's ID
        });
    } else {
        // If insertion failed, return a failure message
        res.status(500).json({ message: 'Failed to create employee. Please try again later.' });
    }
} catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({
        message: 'An error occurred while creating the employee. Please try again later.',
        error: error.message // Include the error message in the response for debugging (you can remove this in production)
    });
}
};

// GET API to retrieve all employees
const getAllEmployees = async (req, res) => {
    try {
        const [rows] = await sql.query('CALL getAllEmployees()');
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No employees found.' });
        }
        // Adjust timezone for dates
        const employees = rows[0].map((employee) => ({
            ...employee,
            enrollment_datetime: moment(employee.enrollment_datetime).format('YYYY-MM-DD HH:mm:ss'),
            increament_datetime: moment(employee.increament_datetime).format('YYYY-MM-DD HH:mm:ss'),
        }));
        res.status(200).json({
            message: 'Employees retrieved successfully.',
            employees,
        });
    } catch (error) {
        console.error('Error retrieving employees:', error);
        res.status(500).json({ message: 'An error occurred while retrieving employees.' });
    }
};


// Get API to retrieve data employeeById wise 
const findEmployeeById = async (req, res) => {
    const { id } = req.params; 
    try {
        const [rows] = await sql.query('CALL FindEmployeeById(?)', [id]);

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'Employee not found.' });
        }
        res.status(200).json({
            message: 'Employee retrieved successfully.',
            employee: rows[0][0] 
        });
    } catch (error) {
        console.error('Error retrieving employee:', error);
        res.status(500).json({ message: 'An error occurred while retrieving the employee.' });
    }
};

// DELETE API to remove an employee by ID
const deleteEmployeeById = async (req, res) => {
    const { id } = req.params; // Expecting the employee ID to be passed as a route parameter
    try {
        const [result] = await sql.query('CALL DeleteEmployeeById(?)', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found.' });
        }
        res.status(200).json({
            message: 'Employee deleted successfully.',
            deletedEmployeeId: id
        });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ message: 'An error occurred while deleting the employee.' });
    }
};

// update employee data by Id 
const updateEmployeeById = async (req, res) => {
    const { id } = req.params; 
    const { 
        name,
        username,
        password,
        employee_type_id,
        email,
        cell_number,
        salary,
        enrollment_datetime,
        increament_datetime,
        increament_amount,
        updated_by
    } = req.body;
    // Validate required fields
    if (!name || !username || !password || !employee_type_id || 
        !email || cell_number === undefined || !salary ||
        !enrollment_datetime || !increament_datetime || 
        increament_amount === undefined || !updated_by) {
        return res.status(400).json({ 
            message: 'All fields are required.' 
        });
    }
    try {
        const hashedPassword = password ? bcrypt.hashSync(password, 8) : undefined;
        const [result] = await sql.query('CALL UpdateEmployeeById(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            id,
            name,
            username,
            hashedPassword,  // Use the hashed password here
            employee_type_id,
            email,
            cell_number,
            salary,
            enrollment_datetime,
            increament_datetime,
            increament_amount,
            updated_by
        ]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found.' });
        }
        res.status(200).json({
            message: 'Employee updated successfully.',
            updatedEmployeeId: id
        });
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ 
            message: 'An error occurred while updating the employee.',
            error: error.message // Optionally include error details for debugging
        });
    }
};

// login employee API 
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    // Validate required fields
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try {
        // Assume `sql.query` is working as expected and returns the user record
        const result = await sql.query('CALL loginUser(?)', [username]);
        const employee = result[0][0]; 
        // console.log(employee);
        if (!employee) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Step 1: Check if the password is valid using bcrypt
        const isPasswordValid = await bcrypt.compare(password, employee[0].password);
       
        // If password is invalid, return unauthorized error
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Step 2: Check employee types and create JWT token
        const { employees_id, employee_type_id } = employee[0];
        const token = jwt.sign(
            {employees_id, employee_type_id }, 
            'AKGoldenCrust@99', 
            { expiresIn: '10h' }
        );
        // console.log(jwt.decode(token));
        res.status(200).json({
            message: 'Login successful',
            token,
            employeeTypeId: employee_type_id
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'An error occurred while logging in.' });
    }
};



module.exports = { createEmployee, getAllEmployees,findEmployeeById, deleteEmployeeById, updateEmployeeById, loginUser};

const { query } = require('express');
const sql = require('../config/database'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
// const nodemailer = require('nodemailer');

// POST API to create a new employee
const createEmployee = async (req, res) => {
    const { name, username, password, employee_type_id, email, cell_number, salary, enrollment_datetime, increament_datetime, increament_amount, created_by } = req.body;

    // Validate required fields
    if (!name || !username || !password || !employee_type_id || !email || !cell_number || !salary || !created_by) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = bcrypt.hashSync(password, 8);
        const result = await sql.query('CALL CreateEmployee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
        ]);

        res.status(201).json({
            message: 'Employee created successfully',
            employeeId: result[0]?.insertId 
        });
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ message: 'An error occurred while creating the employee.' });
    }
};

// GET API to retrieve all employees
const getAllEmployees = async (req, res) => {
    try {
        const [rows] = await sql.query('CALL getAllEmployees()');

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No employees found.' });
        }

        res.status(200).json({
            message: 'Employees retrieved successfully.',
            employees: rows[0] 
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
            password,
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

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const result = await sql.query('CALL loginUser(?)', [username]);
        const employee = result[0][0]; // Assuming the first result set contains the employee data
        // console.log('login user data of employee',employee)

  // Check if employee exists and password is valid
        // if (!employee || !employee.password || !bcrypt.compareSync(password, employee.password)) {
        //     return res.status(401).json({ message: 'Invalid credentials' });
        // }

        // Create JWT token
        const token = jwt.sign({ id: employee.id, employee_type_id: employee.employee_type_id}, 'AKGoldenCrust@99', { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token: token,
            employeeTypeId: employee.employee_type_id // Include employee type if needed
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'An error occurred while logging in.' });
    }
};



module.exports = { createEmployee, getAllEmployees,findEmployeeById, deleteEmployeeById, updateEmployeeById, loginUser};

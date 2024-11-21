const { query } = require('express');
const sql = require('../config/database'); 

const createDeliveryVendor = async (req, res) => {
    const {
        name,
        address,
        interstate_charges,
        outstate_charges,
        Office_location,
        contact_person,
        contact_phone,
        Owner_name,
        Owner_phone
    } = req.body;
    // Validate input fields
    if (!name || !address || !interstate_charges || !outstate_charges || !Office_location || !contact_person || !contact_phone || !Owner_name || !Owner_phone) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the stored procedure to create a new delivery vendor
       const result = await sql.query('CALL CreateDeliveryVendor(?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            name,
            address,
            interstate_charges,
            outstate_charges,
            Office_location,
            contact_person,
            contact_phone,
            Owner_name,
            Owner_phone
        ]);
        // Respond with a success message
        return res.status(201).json({ message: 'Delivery vendor created successfully.'});
    } catch (error) {
        console.error('Error creating delivery vendor:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Get All Delivery Vendors
const getAllDeliveryVendors = async (req, res) => {
    try {
        // Call the stored procedure to get all products
        const [vendors] = await sql.query('CALL GetAllDeliveryVendor()');
        return res.status(200).json(vendors);
    } catch (error) {
        console.error('Error retrieving Delivery Vendors List:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete Vendor
const deleteVendor = async (req, res) => {
    const { dv_id } = req.params; 

    try {
        // Call the stored procedure to delete the employee type
        const result = await sql.query('CALL DeleteDeliveryVendor(?)', [dv_id]);

        // Check if any rows were affected
        if (result[0].affectedRows === 0) {
            return res.status(404).json({ message: 'Delivery Vendor not found.' });
        }

        res.status(200).json({ message: 'Delivery Vendor deleted successfully.' });
    } catch (error) {
        console.error('Error deleting Delivery Vendor:', error);
        res.status(500).json({ message: 'An error occurred while deleting Delivery Vendor.' });
    }
};

// Update Delivary Vendor
const updateDeliveryVendor = async (req, res) => {
    const { dv_id } = req.params; // ID of the delivery vendor to update
    const {
        name,
        address,
        interstate_charges,
        outstate_charges,
        Office_location,
        contact_person,
        contact_phone,
        Owner_name,
        Owner_phone,
    } = req.body;

    // Validate input fields
    if (!dv_id || !name || !address || !interstate_charges || !outstate_charges || !Office_location || !contact_person || !contact_phone || !Owner_name || !Owner_phone) {
        return res.status(400).json({ message: 'All fields are required, including the vendor ID.' });
    }

    try {
        // Call the stored procedure
        const [result] = await sql.execute('CALL UpdateDelivaryVendor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            dv_id,
            name,
            address,
            interstate_charges,
            outstate_charges,
            Office_location,
            contact_person,
            contact_phone,
            Owner_name,
            Owner_phone,
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Delivery vendor not found.' });
        }

        // Respond with a success message
        return res.status(200).json({ message: 'Delivery vendor updated successfully.' });
    } catch (error) {
        console.error('Error updating delivery vendor:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports ={createDeliveryVendor, getAllDeliveryVendors, deleteVendor, updateDeliveryVendor}
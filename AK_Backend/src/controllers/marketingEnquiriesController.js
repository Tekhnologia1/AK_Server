const { query } = require('express');
const sql = require('../config/database'); 

const createMarketingEnquiry = async (req, res) => {
    const {
        name,
        address,
        area_id,
        route_id,
        city_id,
        special_deal,
        cafe_deal_id,
        payment_term_id,
        contact_person,
        contact_person_no,
        owner_name,
        Owner_contact,
        followup_date,
        product_requirements,
        cafe_status_type_id
    } = req.body;

    // Validate the required fields
    if (!name || !address || !area_id || !route_id || !city_id || !contact_person || !contact_person_no || !owner_name || !Owner_contact || !cafe_status_type_id) {
        return res.status(400).json({ message: "Required fields are missing" });
    }
    try {
       const [result] = await sql.query("CALL CreateMarketingEnquiries(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            [
                name,
                address,
                area_id,
                route_id,
                city_id,
                special_deal ,       
                cafe_deal_id ,       
                payment_term_id ,
                contact_person,    
                contact_person_no,
                owner_name,
                Owner_contact,
                followup_date ,      
                product_requirements, 
                cafe_status_type_id
            ]
        );
        // Return success response
        return res.status(201).json({ message: "Marketing enquiry created successfully" });
    } catch (error) {
        console.error("Error creating marketing enquiry:", error);

        // Return error response
        return res.status(500).json({ 
            message: "Internal Server Error", 
            error: error.message 
        });
    }
};

const getAllMarketingEnquiries = async (req, res) => {
    try {
        // Call the stored procedure to get all marketing enquiries
        const [results] = await sql.query("CALL GetAllMarkentingEquiries()");

        // The result of the stored procedure is an array, and the first element contains the rows
        const enquiries = results[0];

        // Return the fetched data
        return res.status(200).json({
            message: "Marketing enquiries fetched successfully",
            data: enquiries
        });
    } catch (error) {
        console.error("Error fetching marketing enquiries:", error);

        // Return error response
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const deleteMarketingEnquiries = async (req, res) => {
    const { id } = req.params; 

    try {
        const result = await sql.query('CALL DeleteMarketingEnquiries(?)', [id]);
        // Check if any rows were affected
        if (result[0].affectedRows === 0) {
            return res.status(404).json({ message: 'Enquiry record not found.' });
        }

        res.status(200).json({ message: 'Enquiry Record Deleted Successfully.' });
    } catch (error) {
        console.error('Error deleting Enquiry record:', error);
        res.status(500).json({ message: 'An error occurred while deleting Enquiry record.' });
    }
};

const updateMarketingEnquiry = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        address,
        area_id,
        route_id,
        city_id,
        special_deal,
        cafe_deal_id,
        payment_term_id,
        contact_person,
        contact_person_no,
        owner_name,
        Owner_contact,
        followup_date,
        product_requirements,
        cafe_status_type_id,
    } = req.body;

    // Validate input
    if (!id) {
        return res.status(400).json({
            message: 'Marketing enquiry ID is required.',
        });
    }

    try {
        // Call the stored procedure
        await sql.query('CALL UpdateMarketingEnquiry(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            id,
            name,
            address,
            area_id,
            route_id,
            city_id,
            special_deal,
            cafe_deal_id,
            payment_term_id,
            contact_person,
            contact_person_no,
            owner_name,
            Owner_contact,
            followup_date,
            product_requirements,
            cafe_status_type_id,
        ]);

        // Return success response
        return res.status(200).json({
            message: 'Marketing enquiry updated successfully.',
        });
    } catch (error) {
        console.error('Error updating marketing enquiry:', error);

        // Return error response
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};


module.exports = { createMarketingEnquiry, getAllMarketingEnquiries, deleteMarketingEnquiries, updateMarketingEnquiry};

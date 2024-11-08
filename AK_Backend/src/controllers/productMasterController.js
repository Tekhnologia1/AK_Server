const { query } = require('express');
const sql = require('../config/database'); 

const createProductMaster = async (req, res) => {
    const { name, details, created_at, created_by } = req.body;

    // Validate input
    if (!name || !details || !created_at || !created_by) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the stored procedure to create a product master
        await sql.query('CALL CreateProductMaster(?, ?, ?, ?)', [name, details, created_at, created_by]);

        return res.status(201).json({ message: 'Product created successfully.' });
    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAllProductMaster = async (req, res) => {
    try {
        // Call the stored procedure to get all products
        const [products] = await sql.query('CALL GetAllProductMaster()');

        return res.status(200).json(products);
    } catch (error) {
        console.error('Error retrieving products:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const findProductMasterById = async (req, res) => {
    const productId = parseInt(req.params.id, 10); 

    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required.' });
    }
    try {
        const [product] = await sql.query('CALL FindProductMasterById(?)', [productId]);

        if (product.length === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        return res.status(200).json(product[0]); // Return the first product found
    } catch (error) {
        console.error('Error retrieving product:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteProductMasterById = async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get the product ID from the request parameters
    // Validate input
    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required.' });
    }
    try {
        const result = await sql.query('CALL DeleteProductMasterById(?)', [productId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        return res.status(200).json({ message: 'Product deleted successfully.' });
    } catch (error) {
        console.error('Error deleting product:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateProductMaster = async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get the product ID from the request parameters
    const { name, details, created_at, created_by } = req.body;

    // Validate input
    if (!productId || !name || !details || !created_at || !created_by) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        const result = await sql.query('CALL UpdateProductMaster(?, ?, ?, ?, ?)', [productId, name, details, created_at, created_by]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        return res.status(200).json({ message: 'Product updated successfully.' });
    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {createProductMaster, getAllProductMaster, findProductMasterById, deleteProductMasterById, updateProductMaster}
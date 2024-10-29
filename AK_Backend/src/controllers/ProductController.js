const { query } = require('express');
const sql = require('../config/database'); 

// const createProduct = async (req, res) => {
//     const {
//         product_master_id,
//         name,
//         details,
//         product_weight,
//         product_filling,
//         filling_types_id,
//         base_price,
//         making_price,
//         price_scale
//     } = req.body; // Get product details from request body

//     // Validate input
//     if (!product_master_id || !name || !details || !product_weight || !base_price || !making_price || !price_scale) {
//         return res.status(400).json({ message: 'All fields are required.' });
//     }
    
    
//     try {
        
//         if(product_filling==0){

//             await sql.query('CALL CreateProduct(?, ?, ?, ?, ?, ?, ?, ?, ?)', [
//                 product_master_id,
//                 name,
//                 details,
//                 product_weight,
//                 product_filling,
//                 null,
//                 base_price,
//                 making_price,
//                 price_scale
//             ]);

//             return res.status(201).json({ message: 'Product created successfully.' });

//         }
        

//         await sql.query('CALL CreateProduct(?, ?, ?, ?, ?, ?, ?, ?, ?)', [
//             product_master_id,
//             name,
//             details,
//             product_weight,
//             product_filling,
//             filling_types_id,
//             base_price,
//             making_price,
//             price_scale
//         ]);
//         // Call the stored procedure to create the product
       

//         return res.status(201).json({ message: 'Product created successfully.' });
//     } catch (error) {
//         console.error('Error creating product:', error);
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// };



const createProduct = async (req, res) => {
    const {
        product_master_id,
        name,
        details,
        product_weight,
        product_filling,
        filling_types_id,
        base_price,
        making_price,
        price_scale
    } = req.body; // Get product details from request body

    // Validate input
    if (!product_master_id || !name || !details || !product_weight || !base_price || !making_price || !price_scale) {
        return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    try {
        const params = [
            product_master_id,
            name,
            details,
            product_weight,
            product_filling,
            product_filling === 0 ? null : filling_types_id, // Use null if product_filling is 0
            base_price,
            making_price,
            price_scale
        ];

        // Call the stored procedure to create the product
        await sql.query('CALL CreateProduct(?, ?, ?, ?, ?, ?, ?, ?, ?)', params);

        return res.status(201).json({ message: 'Product created successfully.' });
    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        // Call the stored procedure to get all products
        const [products] = await sql.query('CALL GetAllProducts()');

        return res.status(200).json(products); // Return the products
    } catch (error) {
        console.error('Error retrieving products:', error);

        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const findProductById = async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get the product ID from request parameters

    // Validate input
    if (isNaN(productId)) {
        return res.status(400).json({ message: 'Invalid product ID.' });
    }
    try {
        // Call the stored procedure to find a product by ID
        const [result] = await sql.query('CALL FindProductById(?)', [productId]);
        const product = result[0]; // Assuming the product data is in the first element of the array

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        return res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const deleteProductById = async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get the product ID from request parameters

    // Validate input
    if (isNaN(productId)) {
        return res.status(400).json({ message: 'Invalid product ID.' });
    }

    try {
        const [result] = await sql.query('CALL DeleteProductById(?)', [productId]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        return res.status(200).json({ message: 'Product deleted successfully.' });
    } catch (error) {
        console.error('Error deleting product:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const updateProductById = async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get the product ID from request parameters
    const {
        product_master_id,
        name,
        details,
        product_weight,
        product_filling,
        filling_type_id,
        base_price,
        making_price,
        price_scale
    } = req.body;

    // Validate input
    if (isNaN(productId)) {
        return res.status(400).json({ message: 'Invalid product ID.' });
    }
    if (!name || !product_master_id) {
        return res.status(400).json({ message: 'Product name and master ID are required.' });
    }

    try {
        const [result] = await sql.query('CALL UpdateProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            productId,
            product_master_id,
            name,
            details,
            product_weight,
            product_filling,
            filling_type_id,
            base_price,
            making_price,
            price_scale
        ]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        return res.status(200).json({ message: 'Product updated successfully.' });
    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {createProduct,getAllProducts, findProductById, deleteProductById, updateProductById}
const jwt = require('jsonwebtoken');

// Middleware to verify token and authorize user
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    jwt.verify(token, 'AKGoldenCrust@99', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.employee_id = decoded.id;  
        req.employee_type_id = decoded.employee_type_id;

        if (req.employee_type_id !== 1) { // Example: Only allow employee type 1 (e.g., admin)
            return res.status(403).json({ message: 'Access forbidden: You do not have sufficient permissions' });
        }

        next(); 
    });
};

module.exports = { verifyToken };

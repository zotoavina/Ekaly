const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const response = require('./response.helper');

// get password vars from .env file
dotenv.config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) response.error(res, "Unauthorized: Token needed", 401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return response.error(res, "Unauthorized: Token not valid", 403);
        // req.user = user
        // next()
    })
}

function generateAccessToken(username) {
    return jwt.sign({data: username}, process.env.TOKEN_SECRET, { expiresIn: '24h' });
}

module.exports = {
    authenticateToken,
    generateAccessToken
}

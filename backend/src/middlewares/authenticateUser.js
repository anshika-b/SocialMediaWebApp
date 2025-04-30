const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
        const userData = jwt.verify(token, config.jwtSecret);
        if(userData) {
            req.headers.userId = userData.data.id;
            req.headers.username = userData.data.username;
            console.log(userData);
            // res.json(token);
            next();
        } else {
            return res.status(404).json({msg: 'user possibly does not exists'});
        }
    } catch (error) {
        return res.status(500).json({msg: 'error verifying user'});
    }
}

module.exports = authenticateUser;
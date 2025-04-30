const dotenv = require('dotenv');

dotenv.config();

const _config = {
    mongo_url : process.env.MONGO_URI,
    port : process.env.PORT,
    jwtSecret : process.env.JWT_SECRET,
    nodeEnv : process.env.NODE_ENV,
}


const config = Object.freeze(_config);

module.exports = { config }
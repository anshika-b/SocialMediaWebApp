const mongoose = require('mongoose');
const { config } = require('./config');

const connectDB = () => {
    mongoose
    .connect(config.mongo_url)
    .then(() => {
        console.log('successfully connected to the database!');
    })
    .catch(err => {
        console.log(`error while connecting to the database ${err}`);
    })
}

// export default connectDB;
module.exports = connectDB;
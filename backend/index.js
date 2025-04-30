const app = require('./src/app');
const { config } = require('./src/config/config');
const connectDB = require('./src/config/db');

app.listen(config.port, ()=>{
    connectDB();
    console.log(`Server started on port ${config.port}`);
})
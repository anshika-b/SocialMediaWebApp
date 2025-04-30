const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoute');

const app=express();
const port = 5000;

app.use(cors())
dotenv.config();
app.use(express.json());


app.use('/api/user', userRouter);


module.exports = app;
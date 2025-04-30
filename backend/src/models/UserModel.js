// import mongoose from "mongoose";
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId
    }],
})

const User = mongoose.model('User', userSchema);

module.exports = User;
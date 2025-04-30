const User = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require("../config/config");

const createUser = async (req, res) => {
    const {
        name,
        username,
        email,
        password
    } = req.body;

    try {
        const users = await User.find({});
        users.forEach(user => {
            if(user.username == username) {
                return res.status(403).json({msg: 'user already exists'});
            }
        })
    } catch (error) {
        return res.status(500).json({msg: 'error while searching for users'});
    }

    let hashedPassword;
    const saltRounds = 10;
    try {
        hashedPassword = await bcrypt.hash(password, saltRounds);
    } catch (error) {
        return res.status(500).json({msg: 'cannot hash the password'})
    }

    try {
        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword
        })
        console.log(user);
        if(user) {
            return res.status(201).json(user);
        }
    } catch (error) {
        return res.status(500).json({msg: 'error while creating the user'})
    }
}

const loginUser = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    let hashedPassword;
    let foundUser;
    try {
        const user = await User.findOne({username: username});
        if(user) {
            hashedPassword = user.password;
            foundUser = user;
        }
    } catch (error) {
        return res.status(500).json({msg: 'cannot find the user'});
    }


    try {
        const verifyUser = await bcrypt.compare(password, hashedPassword);
        if(verifyUser) {
            const token = jwt.sign({
                data: {
                    username: username,
                    id: foundUser._id
                }
            }, config.jwtSecret, {
                expiresIn: '7d'
            })
            return res.status(200).json(token);
        }
    } catch (error) {
        return res.status(500).json({msg: 'cannot compare password or sign token'});
    }
}

const deleteUser = async (req, res) => {
    const userId = req.headers.userId;
    const userIdParam = req.params.userId;

    try {
        if(userId == userIdParam) {
            const res = await User.findByIdAndDelete(userId);
            res.status(200).json(res);
        } else {
            return res.status(404).json({msg: 'user not found'});
        }
    } catch (error) {
        return res.status(500).json({msg: 'error while deleting the user'});
    }
}

module.exports = { createUser, loginUser, deleteUser };
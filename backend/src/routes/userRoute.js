const express = require('express');
const { createUser, loginUser, deleteUser } = require('../controllers/userController');
const authenticateUser = require('../middlewares/authenticateUser');
const userRouter = express.Router();

userRouter.post('/signup', createUser);
userRouter.post('/signin', loginUser);
userRouter.delete('/deleteuser/:userId', authenticateUser, deleteUser);

module.exports = userRouter;
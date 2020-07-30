const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const User = require('../models/user')
const UserController = require('../controllers/users');



router.post('/signup',UserController.users_signup );


router.post('/login',UserController.users_login);


router.delete('/:userId',checkAuth,UserController.users_delete);


module.exports = router;
const express = require('express');
const router = express.Router();
const appConfig = require('./../config/appConfig');
const userController = require('./../controllers/usersController');
const baseUrl =  appConfig.apiVersion + '/users';
const paramValidation = require('./../config/param-validation');
const { check, validationResult } = require('express-validator');


router.get(baseUrl , userController.getAllUsers)

router.post(baseUrl + '/login',userController.login)

router.post(baseUrl + '/register',userController.register)

module.exports = router;
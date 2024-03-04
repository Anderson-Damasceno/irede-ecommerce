/* eslint-disable no-undef */
const express = require('express')
const loginController = require('../controllers/loginController')

const router = express.Router()

router.get('/', loginController.loginClient)

module.exports = router
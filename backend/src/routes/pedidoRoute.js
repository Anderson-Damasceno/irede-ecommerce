/* eslint-disable no-undef */
const express = require('express')
const auth = require('../middleware/authMiddleware')
const pedidoController = require('../controllers/pedidoController')

const router = express.Router()

router.post('/', auth.authMiddleware,pedidoController)

module.exports = router
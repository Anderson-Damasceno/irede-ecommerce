/* eslint-disable no-undef */
const express = require('express')
const produtoController = require('../controllers/produtoController')

const router = express.Router()

router.get('/', produtoController.listProdutos)
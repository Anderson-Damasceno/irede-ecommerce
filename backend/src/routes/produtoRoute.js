/* eslint-disable no-undef */
const express = require('express')
const produtoController = require('../controllers/produtoController')

const router = express.Router()

router.get('/', produtoController.listProdutos)
router.get('/:id', produtoController.listProduto)
router.get('/categorias/:id',produtoController.filterProduto)
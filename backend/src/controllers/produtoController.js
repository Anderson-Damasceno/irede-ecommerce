/* eslint-disable no-undef */
const produtoService = require('../services/produtoService')

//GET ALL
const listProdutos = async (req, res) => {
    const listClients = await produtoService.listProdutos()
    return res.status(200).send(listClients)
}

const listProduto = async (req, res) => {
    const id = req.params
    const listProduto = await produtoService.listProduto(id)
    return res.status(201).send(listProduto)
}

const filterProduto = async (req, res) => {
    const id_categoria = req.params
    const filterProduto = await produtoService.filterProduto(id_categoria)
    return res.status(200).send(filterProduto)
}

module.exports = {
    listProdutos,
    listProduto,
    filterProduto
}
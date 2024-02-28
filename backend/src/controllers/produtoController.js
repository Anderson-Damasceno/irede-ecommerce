/* eslint-disable no-undef */
const produtoService = require('../services/produtoService')

//GET ALL
const listProdutos = async (req, res) => {
    const listClients = await produtoService.listProdutos()
    return res.status(200).send(listClients)
}

module.exports = {
    listProdutos
}
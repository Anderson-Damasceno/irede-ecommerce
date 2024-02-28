/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const produtoModel = require('../models/produtoModel')

//GET ALL
const listProdutos = async () => {
    const listProdutos = produtoModel.listProdutos()
    return listProdutos
}

module.exports = {
    listProdutos
}
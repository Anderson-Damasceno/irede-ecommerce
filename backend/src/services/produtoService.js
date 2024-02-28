/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const produtoModel = require('../models/produtoModel')

//GET ALL
const listProdutos = async () => {
    const listProdutos = await produtoModel.listProdutos()
    return listProdutos
}

const listProduto = async (id) => {
    const listProduto = await produtoModel.listProduto(id)
    return listProduto
}

const filterProduto = async (id_categoria) => {
    const filterProduto = await produtoModel.filterProduto(id_categoria)
    return filterProduto
}

module.exports = {
    listProdutos,
    listProduto,
    filterProduto
}
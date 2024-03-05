/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const produtoModel = require('../models/produtoModel')

//GET ALL
const listProdutos = async () => {
    const listProdutos = await produtoModel.listProdutos()
    //console.log(listProdutos)
    return listProdutos.rows
}

const listProduto = async (id) => {
    const listProduto = await produtoModel.listProduto(id)
    return listProduto.rows
}

const filterProduto = async (id) => {
    const filterProduto = await produtoModel.filterProduto(id)
    return filterProduto.rows
}

module.exports = {
    listProdutos,
    listProduto,
    filterProduto
}
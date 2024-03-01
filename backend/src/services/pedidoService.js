/* eslint-disable no-undef */
const pedidoModel = require('../models/pedidoModel')

const createPedido = async (pedido) => {
    const createPedido = pedidoModel.createPedido(pedido)
    return createPedido
}

module.exports = {
    createPedido
}
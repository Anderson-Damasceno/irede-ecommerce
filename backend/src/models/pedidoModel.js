/* eslint-disable no-undef */
const pool = require('../connection/dbConnection')

const createPedido = async(pedidos) => {
    const pedido = await pool.connect() 
    const query = 'insert into Pedido(data_compra, status_pedido) values ($1, $2) returning id'
    const params = [pedidos.pedido.data_compra, pedidos.pedido.status_pedido]
    const idPedido = await pedido.query(query, params)

    
    pedido.release()
    return pedidos
}

module.exports = {
    createPedido
}
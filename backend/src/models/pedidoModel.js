/* eslint-disable no-undef */
const pool = require('../connection/dbConnection')

const createPedido = async(pedidos) => {
    const pedido = await pool.connect() 
    const query = 'insert into Pedido(data_compra, status_pedido) values ($1, $2) returning id;'
    const params = [pedidos.pedido.data_compra, pedidos.pedido.status_pedido]
    const idPedido = await pedido.query(query, params)

    const items = [[pedidos.produtos.id_produto, pedidos.produtos.id_cliente, pedidos.produtos.quantidade_produto, pedidos.produtos.preco_hora_da_compra,idPedido]]
    const query_2 = format('insert into ProdutoCliente (id_produto, id_cliente, quantidade_produto, preco_hora_da_compra, pedido_id) values %L', items)
    const pedido_final = await pool.query(query_2)

    pedido.release()
    return pedido_final
}

module.exports = {
    createPedido
}
// eslint-disable-next-line no-undef
const pool = require('../connection/dbConnection')
//GET ALL
const listProdutos = async () => {
    const listProdutos = await pool.query('SELECT * FROM Produto;')
    return listProdutos
}

const listProduto = async (id) => {
    const query = 'SELECT FROM Produto WHERE Produto.id = $1;'
    const params = id
    const listProduto = await pool.query(query, params)
    return listProduto
}

const filterProduto = async (id_categoria) => {
    const query = 'SELECT FROM Produto WHERE Produto.categoria_id = $1;'
    const params = id_categoria
    const filterProduto = await pool.query(query, params)
    return filterProduto
}

// eslint-disable-next-line no-undef
module.exports ={
    listProdutos,
    listProduto,
    filterProduto
}
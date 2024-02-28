// eslint-disable-next-line no-undef
const pool = require('../connection/dbConnection')
//GET ALL
const listProdutos = async () => {
    const listProdutos = await pool.query('SELECT * FROM Produto;')
    return listProdutos
}

// eslint-disable-next-line no-undef
module.exports ={
    listProdutos
}
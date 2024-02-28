/* eslint-disable no-undef */
const pool = require('../connection/dbConnection')

const loginClient = async (body) => {
    const {nome, senha} = body
    const query = 'SELEC FROM Cliente WHERE Produto.nome = $1 && Cliente.senha = $2;'
    const params = [nome, senha]
    const result = await pool.query(query, params)
    return result
}

module.exports = {
    loginClient
}
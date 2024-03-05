/* eslint-disable no-undef */
const pool = require('../connection/dbConnection')
//GET ALL
const listClients = async () => {
    const listClients = ''
    return listClients
}

//GET ONE
const listClient = async (email) => {
    const query = 'SELECT * FROM Cliente Where Cliente.email = $1;'
    const params = email
    const listClient = await pool.query(query, [params])
    return listClient
}

//POST
const createClient = async (client) => {
    const {nome, email, senha} = client
    const query = 'INSERT INTO Cliente (nome, email, senha) VALUES ($1, $2, $3);'
    const params = [nome, email, senha]
    const createClient = await pool.query(query, params)
    return createClient
}

//PUT
const updateClient = async (id) => {
    const updateClient = id
    return updateClient
}

//DELETE
const deleteClient = async (id) => {
    const deleteClient = id
    return deleteClient
}

// eslint-disable-next-line no-undef
module.exports = {
    listClients,
    listClient,
    createClient,
    updateClient,
    deleteClient
}
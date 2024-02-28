
// eslint-disable-next-line no-undef
const clientModel = require('../models/clientModel')

//GET ALL
const listClients = async () => {
    const listClients = clientModel.listClients()
    return listClients
}

//GET ONE
const listClient = async (email) => {
    const listClient = clientModel.listClient(email)
    return listClient
}

//POST
const createClient = async (client) => {
   
    if (client.nome == "" || undefined) {
        return {mensagem: "Nome inválido"}
    } else if (client.email == "" || undefined) {
        return { mensagem: "Email inválido"}
    } else if (client.senha == "" || undefined) {
        return {mensagem: "Senha inválida"}
    }

    const existe = listClient(client.email)
    if(existe){
        return {mensagem: "Cadastro inválido, já existe no banco de dados"}
    }

    const createClient = clientModel.createClient(client)
    return createClient
}

//PUT
const updateClient = async (id) => {
    const updateClient = clientModel.updateClient(id)
    return updateClient
}

//DELETE
const deleteClient = async (id) => {
    const deleteClient = clientModel.deleteClient(id)
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
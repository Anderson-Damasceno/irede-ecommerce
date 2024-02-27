
// eslint-disable-next-line no-undef
const clientModel = require('../models/clientModel')

//GET ALL
const listClients = async () => {
    const listClients = clientModel.listClients()
    return listClients
}

//GET ONE
const listClient = async (id) => {
    const listClient = clientModel.listClient(id)
    return listClient
}

//POST
const creatClient = async (client) => {
    const creatClient = clientModel.creatClient(client)
    return creatClient
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
    creatClient,
    updateClient,
    deleteClient
}
/* eslint-disable no-undef */
const clientService = require('../services/clientService')

//GET ALL
const listClients = async (req, res) => {
    const listClients = await clientService.listClients()
    return res.status(200).send(listClients)
}

//GET ONE
const listClient = async (req, res) => {
    const {id} = req.body
    const listClient = clientService.listClient(id)
    return res.status(200).send(listClient)
}

//POST
const creatClient = async (req, res) => {
    const client = req.body
    const creatClient = clientService.creatClient(client)
    return res.status(200).send(creatClient)
}

//PUT
const updateClient = async (req, res) => {
    const {id} = req.body
    const updateClient = clientService.updateClient(id)
    return res.status(200).send(updateClient)
}

//DELETE
const deleteClient = async (req, res) => {
    const {id} = req.body
    const deleteClient = clientService.deleteClient(id)
    return res.status(200).send(deleteClient)
}

// eslint-disable-next-line no-undef
module.exports = {
    listClients,
    listClient,
    creatClient,
    updateClient,
    deleteClient
}
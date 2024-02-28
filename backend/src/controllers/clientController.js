/* eslint-disable no-undef */
const clientService = require('../services/clientService')

//GET ALL
const listClients = async (req, res) => {
    const listClients = await clientService.listClients()
    return res.status(200).send(listClients)
}

//GET ONE
const listClient = async (req, res) => {
    const email = req.params
    const listClient = clientService.listClient(email)
    return res.status(200).json(listClient)
}

//POST
const createClient = async (req, res) => {
    const client = req.body
    const createClient = clientService.createClient(client)
    return res.status(201).json(createClient)
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
    createClient,
    updateClient,
    deleteClient
}
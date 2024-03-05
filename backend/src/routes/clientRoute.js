/* eslint-disable no-undef */
const express = require('express')
const clientController = require('../controllers/clientController')

const router = express.Router()

router.get('/', clientController.listClients)
router.get('/:email', clientController.listClient)
router.put('/', clientController.createClient)
router.post('/', clientController.updateClient)
router.delete('/', clientController.deleteClient)

module.exports = router
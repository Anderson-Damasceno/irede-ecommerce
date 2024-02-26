/* eslint-disable no-undef */
const express = require('express')
const clientController = require('../controllers/clientController')

const router = express.Router()

router.get('/', clientController.listClients)
router.get('/:id', clientController.listClient)
router.put('/', clientController.creatClient)
router.post('/', clientController.updateClient)
router.delete('/', clientController.deleteClient)

module.exports = router
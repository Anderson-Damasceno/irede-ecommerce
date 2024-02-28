/* eslint-disable no-undef */
const express = require('express')
const clientRouter = require('./routes/clientRoute')
const produtoRouter = require('./controllers/produtoController')

const app = express()

app.use(express.json())
app.use('/client', clientRouter)
app.use('/product', produtoRouter)


module.exports = app
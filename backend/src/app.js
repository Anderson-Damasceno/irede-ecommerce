/* eslint-disable no-undef */
const express = require('express')
const clientRouter = require('./routes/clientRoute')

const app = express()

app.use(express.json())
app.use('/client', clientRouter)


module.exports = app
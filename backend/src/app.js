/* eslint-disable no-undef */
const express = require('express')
const clientRouter = require('./routes/clientRoute')
const produtoRouter = require('./routes/produtoRoute')
const loginRouter = require('./routes/loginRoute')

const app = express()

app.use(express.json())
app.use('/client', clientRouter)
app.use('/product', produtoRouter)
app.use('/login', loginRouter)


module.exports = app
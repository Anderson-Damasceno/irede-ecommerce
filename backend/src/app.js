/* eslint-disable no-undef */
const express = require('express')
const clientRouter = require('./routes/clientRoute')
const produtoRouter = require('./routes/produtoRoute')
const loginRouter = require('./routes/loginRoute')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/client', clientRouter)
app.use('/product', produtoRouter)
app.use('/login', loginRouter)


module.exports = app
/* eslint-disable no-undef */
const {Pool} = require('pg')
require('dotenv').config()


const connection = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.DBPORT,
    password: process.env.PASSWORD,
    database: process.env.DB
})

module.exports = connection
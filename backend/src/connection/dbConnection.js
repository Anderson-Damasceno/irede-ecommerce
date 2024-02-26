/* eslint-disable no-undef */
const {Pool} = require('pg')

const connection = new Pool({
    host: blabla,
    user: blabla,
    port: 5432,
    password: admin,
    database: blabla
})

module.exports = connection
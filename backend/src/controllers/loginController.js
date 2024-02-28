/* eslint-disable no-undef */
const loginService = require('../services/loginService')

const loginClient = async (req, res) => {
    const body = req.body
    const loginClient = await loginService.loginClient(body)
    return res.status(200).send(loginClient)
}

module.exports = {
    loginClient
}
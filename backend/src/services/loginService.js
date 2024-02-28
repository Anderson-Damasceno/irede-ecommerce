/* eslint-disable no-undef */
const loginModel = require('../models/loginModels')

const loginClient = async (body) => {
    const loginClient = await loginModel.loginClient(body)
    return loginClient
}

module.exports = {
    loginClient
}
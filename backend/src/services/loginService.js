/* eslint-disable no-undef */
const loginModel = require('../models/loginModels')

const loginClient = async (body) => {
    if(body.email === "" || undefined){
        return {mensagem:"Email inválido"}
    } else if(body.senha === "" || undefined){
        return {mensagem:"senha inválida"}
    }
    const loginClient = await loginModel.loginClient(body)

    if(loginClient) {
        return {mensagem: "Acesso validado", bool: true}
    }
    return {mensagem: "Cliente inexistente", bool: false}
}

module.exports = {
    loginClient
}
/* eslint-disable no-undef */
const loginModel = require('../models/loginModels')
const jwt = require('jsonwebtoken')


const loginClient = async (body) => {
    if(body.email === "" || undefined){
        return {mensagem:"Email inválido"}
    } else if(body.senha === "" || undefined){
        return {mensagem:"senha inválida"}
    }
    const loginClient = await loginModel.loginClient(body)

    if(loginClient) { //try catch, verifica senha ou nome
        let token = jwt.sign({
            id: 'idCliente',
            nome: 'nomeCliente',
            email: 'emailCliente'
        }, 'secret',{expiresIn: '1h'})
        return {mensagem: "Acesso validado", bool: true, token: token}
    }
    return {mensagem: "Cliente inexistente", bool: false}
}

module.exports = {
    loginClient
}
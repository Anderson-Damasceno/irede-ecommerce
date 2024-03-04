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
        try {
            let token = jwt.sign({
                id: 'idCliente',
                nome: 'nomeCliente',
                email: 'emailCliente'
            }, 'secret',{expiresIn: '1h'})
            return {mensagem: "Acesso validado", bool: true, token: token}
        } catch (exeption){
            console.log(exeption)
        }
        
    return {mensagem: "Cliente inexistente ou dados inválidos", bool: false}
}

module.exports = {
    loginClient
}
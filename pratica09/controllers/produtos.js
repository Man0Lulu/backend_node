const express = require('express')
const router = Router.express()

async function criar(req, res) {
    try {
        // Envia a resposta com status 201 e o objeto JSON contendo os dados do produto
        res.status(201).json({ nome: 'uva', preco: 20.0 });
    } catch (error) {
        // Em caso de erro, envia uma resposta com status 500 e uma mensagem de erro
        res.status(500).json({ mensagem: 'Erro ao criar produto', error: error.message });
    }
}


module.exports = { criar };
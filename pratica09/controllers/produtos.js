const Produto = require('../models/produtos')

async function criar(req, res) {
    try {
        // Envia a resposta com status 201 e o objeto JSON contendo os dados do produto
        const produto = await Produto.create(req.body)
        res.status(201).json(produto);
    } catch (error) {
        // Em caso de erro, envia uma resposta com status 500 e uma mensagem de erro
        res.status(500).json({ mensagem: 'Erro ao criar produto', error: error.message });
    }
}


module.exports = { criar };
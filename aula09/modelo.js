const mongoose = require('mongoose');

// DDL

const produtosSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    quantidade: Number
});

module.exports = mongoose.model('Produto', produtosSchema);
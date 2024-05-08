const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: false
    },
    preco: {
        type: Number,
        required: false
    },
    
});

module.exports = mongoose.model("Produto", produtoSchema);
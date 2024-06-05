const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true,
        trim: true, //o trim tira os espaços em branco no inicio e no fim, mas não tira o espaço entre palavras
        uppercase: true, // ele deixa tudo maiusculo
        minLength: 3 //minLength quantidade minima de caracteres
    },
    preco:{
        type: Number,
        required: true,
        min: 0 // valor minimo que no caso tem que ser 0
    }
})

module.exports = mongoose.model('Produto', produtoSchema)

require('dotenv').config();
const mongoose = require('mongoose')
const Produto = require("./modelo")

const url = process.env.MONGODB_URL;

async function main(){
    try{
    await mongoose.connect(url);
    console.log("De boas");
    } catch (err) {
        console.log("Deu ruim", err.message);
    }
    //DML

//inserir 1 produto
   // const produto = new Produto({
     //   nome: "banana",
       // preco: 12,
        //quantidade: 5
//
  //  });
   // await produto.save();
   // console.log(produto);


//outra forma de adicionar 1 produto
   // const produto = await Produto.create({
     //   nome: "uva",
     //   preco: 32.5,
     //   quantidade: 10
   // });

   // console.log(produto);

//inserir N produtos
    // const produtos = await Produto.insertMany([
      //  { nome: "maca", preco: 20.7, quantidade: 8},
      //  { nome: "pera", preco: 12.5, quantidade: 2},
      //  {nome: "laranja", preco: 25.6, quantidade: 28},
   // ]);
   // console.log(produtos);

   //atualizar 1 produto
const produto = await Produto.findOneAndUpdate(
    {_id: '662851142244dd6180aed7a5'},
    {nome: "morango", preco: 15.0, quantidade: 20 }
 );
 console.log(produto)


//deletar 1 produto
    //const produto = await Produto.find({nome: "uva"});
    //console.log(produto);

    //DQL

//consultar 1 produto
    //const produtos = await Produto.find({ nome: "maca" });
    //console.log(produtos);


    await mongoose.disconnect();
}

main();
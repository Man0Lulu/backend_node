const conectarDb = require("./database");

class Contato {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

async function inserir(contato) {
  const db = await conectarDb();
  const collection = db.collection("contatos");
  const result = await collection.insertOne({
    nome: contato.nome,
    email: contato.email,
    telefone: contato.telefone,
  });
  contato._id = result.insertedId;
}

async function alterar(contato) {
  const db = await conectarDb();
  const collection = db.collection("contatos");
  const result = await collection.updateOne(
    { _id: contato._id }, 
    {
      $set: {
        nome: contato.nome,
        email: contato.email,
        telefone: contato.telefone
      }
    }
  );
}

async function deletar(contato){
    const db = await conectarDb();
    const collection = db.collection("contatos");
    const result = await collection.deleteOne({ nome: contato.nome });
}

async function listar(contato){
    const db = await conectarDb();
    const collection = db.collection("contatos");
    const result = await collection.findOne({ nome: contato.nome });
}



module.exports = {
  Contato,
  inserir,
  alterar,
  deletar,
  listar
};

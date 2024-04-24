const { MongoClient, ObjectId } = require("mongodb");

const url =
  "mongodb+srv://luisrocksousa1111:qnm17h34@cluster0.fhxd9cq.mongodb.net/";

async function conectar() {
  try {
    const mongoClient = await MongoClient.connect(url);
    return mongoClient.db("loja");
  } catch (error) {
    console.log("Deu ruim!", error);
  }
}

async function listar() {
  const db = await conectar();
  return db.collection("produtos").find().toArray();
}
async function atualizar(id, produtoAtualizado) {
  const db = await conectar();
  return db
    .collection("produtos")
    .updateOne({ _id: new ObjectId(id) }, { $set: produtoAtualizado });
}

async function inserir(produto) {
  const db = await conectar();
  return db.collection("produtos").insertOne(produto);
}

async function deletar(id) {
  const db = await conectar();
  return db.collection("produtos").deleteOne({ _id: new ObjectId(id) });
}

async function testar() {
  const result = await inserir({ nome: "banana", preco: 20.0 });
  console.log("Produto inserido", result);

  const produtos = await listar();
  console.log("listagem de processo", produtos);

  const atual = await atualizar("66285079d5e4c2af461882de", {
    nome: "banana",
    preco: 18.0,
  });
}

testar();

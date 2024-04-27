const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://luisrocksousa1111:qnm17h34@cluster0.fhxd9cq.mongodb.net/";

const client = new MongoClient(url);

async function conectar() {
  try {
    await client.connect();
    console.log("Conectado com sucesso!");
  } catch {
    return client.db("agenda");
  }
}

module.exports = conectar;


const { MongoClient } = require('mongodb');

let db = null;

const url = "mongodb+srv://luisrocksousa1111:qnm17h34@cluster0.fhxd9cq.mongodb.net/";;

function conectarDb() {
    if (db) {
        return db;
    }

    const client = new MongoClient(url);
    client.connect();
    db = client.db('agenda');
    return db;
}

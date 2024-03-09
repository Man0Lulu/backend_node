//corigindo nome do commit
const express = require('express');

const app = express();

app.use(express.json());

app.use(function(req, res, next){
    console.log("Data", new Date());
    next()
});

app.get("/", function(req, res){
    console.log("URL=", req.url);
    console.log("Método=", req.method);
    console.log("Parâmetros de consulta=", req.query);
    console.log("Cabeçalhos=", req.headers);
    res.send("Olá");
});

app.post("/", function(req, res) {
    res.json({ status: "200", message: "Sucesso" });
});

app.put("/", function(req, res){
    res.status(204).end();
});

    app.delete("/", function(req, res){
        throw new Exception();
    })

    app.use(function(error, req, res, next){
        res.status(400).send("Deu ruim!");
    });

app.listen(3000, function() {
    console.log("API está on!");
});

module.exports = app;
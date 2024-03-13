const express = require('express');
const app = express();

app.get('/', function(req, res) {
  console.log('URL =', req.url);
  res.send('Olá');
});


app.post('/', function(req, res) {
  res.status(201).send('Você fez uma requisição POST');
});

app.put('/', function(req, res) {
  res.send('Você fez uma requisição PUT');
});

app.delete('/', function(req, res) {
  res.status(204).end();
});

app.listen(3000, function() {
  console.log("API está on!");
});

module.exports = app;
const express = require('express');

const router = express.Router();

router.get("/produtos", function(req, res){
  res.json([]);
});

router.get("/produtos/:produtoId", function(req, res){
  if (req.params.produtoId == 100000) {
    res.status(404).json({msg: "Produto não encontrado"});
    return;
  }

  res.json({});
});

router.post("/produtos", function(req, res){
  if (!req.body || !req.body.nome || !req.body.preco) {
    res.status(422).json({msg: "Nome e/ou preco do produto obrigatorios"});
    return;
  }
  res.status(201).json({});
});

router.put("/produtos/:produtoId", function(req, res){
  if (req.params.produtoId == 100000) {
    res.status(404).json({msg: "Produto não encontrado"});
    return;
  }
  
  res.json({});
});

router.delete("/produtos/:produtoId", function(req, res){
  if (req.params.produtoId == 100000) {
    res.status(404).json({msg: "Produto não encontrado"});
    return;
  }
    
  res.status(204).end();
});
  

module.exports = router;

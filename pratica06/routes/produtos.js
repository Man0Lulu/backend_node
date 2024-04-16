const express = require('express');
const controllerProdutos = require('../controllers/controller_produto.js');
const router = express.Router();
router.get('/', controllerProdutos.listarTodos)
router.get('/:id', controllerProdutos.buscarId)
router.post('/', controllerProdutos.criar)
router.put('/:id', controllerProdutos.atualizar)
router.delete('/:id', controllerProdutos.deletar)

module.exports = router
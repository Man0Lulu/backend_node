const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos');

const router = express.Router();

router.post('/', controllerProdutos.validarDados, controllerProdutos.criar);

router.get('/', controllerProdutos.obterTodos);

router.get('/:id', controllerProdutos.buscarPeloId, controllerProdutos.obter);

module.exports = router;

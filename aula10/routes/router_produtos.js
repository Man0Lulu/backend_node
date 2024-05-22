const express = require("express");

const controllerProdutos = require("../controllers/controller_produtos");

const verificarToken = require('../middlewares/auth');
const validarToken = require("../middlewares/auth");

const router = express.Router();

router.post("/", controllerProdutos.validarDados, controllerProdutos.criar);

router.get("/", validarToken, controllerProdutos.obterTodos);

router.get("/", controllerProdutos.obterTodos);

router.get("/:id", controllerProdutos.buscarPeloId, controllerProdutos.obter);

router.put(
  "/:id",
  controllerProdutos.buscarPeloId,
  controllerProdutos.validarDados,
  controllerProdutos.atualizar
);

router.delete("/:id", 
controllerProdutos.buscarPeloId,
controllerProdutos.remover
);

module.exports = router;
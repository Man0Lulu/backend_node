const express = require('express')
const controllerProdutos = require('../controllers/produtos')
const router = express.Router()


router.post('/', controllerProdutos.criar)


module.exports = router
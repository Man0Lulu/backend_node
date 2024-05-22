var express = require('express');
const controller = require('../controllers/users')
var router = express.Router();


router.post("/", controller.criar)

router.post('/login', controller.entrar)

module.exports = router;

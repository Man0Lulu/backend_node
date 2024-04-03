const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');

const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDoc = YAML.parse(file);
const router = express.Router();

router.use('/', swaggerUI.serve);

router.use('/', swaggerUI.setup(swaggerDoc));

module.exports = router;
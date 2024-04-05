const express = require('express');
const SwaggerUI = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const router = express.Router();
const file = fs.readFileSync('swagger.yaml', 'utf8');    
const swaggerDocument = YAML.parse(file);
    
  router.use('/', SwaggerUI.serve);

  router.get('/', SwaggerUI.setup(swaggerDocument));

  module.exports = router;
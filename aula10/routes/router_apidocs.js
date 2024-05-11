const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('yaml');
const express = require('express');

const file = fs.readFileSync("./swagger.yaml", 'utf-8');
const swaggerDoc = yaml.parse(file);
const router = express.Router();

router.use("/", swaggerUI.serve);

router.get("/", swaggerUI.setup(swaggerDoc))

module.exports = router;
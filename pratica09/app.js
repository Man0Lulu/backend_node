require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();
const Apidocs = require('./routes/api-docs');
const RouterProdutos = require('./routes/produtos');

mongoose.connect(process.env.MONGODB_URL);

app.use('/produtos', RouterProdutos)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api-docs', Apidocs)
module.exports = app;

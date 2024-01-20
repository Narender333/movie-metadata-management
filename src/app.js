// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const metadataController = require('./controllers/metadataController');
const authController = require('./controllers/authController');

const app = express();

app.use(bodyParser.json());

// Use controllers
app.use('/', metadataController);
app.use('/', authController);

module.exports = app;

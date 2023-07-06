const config = require('./config.js');
const express = require('express');
const app = express();
app.use(express.json());
const app1 = require('./src/routes/index.js');

app.use(config.basePath, app1);

module.exports = app;

const config = require('./config.js');
const express = require('express');
const app = express();
app.use(express.json());
const app2 = require('./src/routes/index.js');

app.use(config.basePath, app2);

module.exports = app;

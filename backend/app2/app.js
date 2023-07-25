const config = require('./config.js');
const express = require('express');
var cors = require('cors');
const app = express();
const corsOpts = {
  origin: '*',

  methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

  allowedHeaders: ['Content-Type', 'authorization'],
};
app.use(cors(corsOpts));
app.use(express.json());
const app2 = require('./src/routes/index.js');

app.use(config.basePath, app2);

module.exports = app;

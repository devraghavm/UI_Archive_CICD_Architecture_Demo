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
const app1 = require('./src/routes');

app.use(config.basePath, app1);

module.exports = app;

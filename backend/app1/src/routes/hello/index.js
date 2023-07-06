const config = require('../../../config.js');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).send(`Hello from backend ${config.basePath}!`);
  next();
});

router.get('/greeting', (req, res, next) => {
  res
    .status(200)
    .send(`Hello again from ${config.environment} environment with basepath ${config.basePath}!`);
  next();
});

module.exports = router;

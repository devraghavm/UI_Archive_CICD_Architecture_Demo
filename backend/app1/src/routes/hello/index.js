const config = require('../../../config.js');
const router = require('express').Router();

let products = [
  { id: 1, name: 'Product 1', price: 1.0 },
  { id: 2, name: 'Product 2', price: 2.0 },
  { id: 3, name: 'Product 3', price: 3.0 },
  { id: 4, name: 'Product 4', price: 4.0 },
  { id: 5, name: 'Product 5', price: 5.0 },
  { id: 6, name: 'Product 6', price: 6.0 },
  { id: 7, name: 'Product 7', price: 7.0 },
  { id: 8, name: 'Product 8', price: 8.0 },
  { id: 9, name: 'Product 9', price: 9.0 },
  { id: 10, name: 'Product 10', price: 10.0 },
];

router.get('/', (req, res, next) => {
  res.status(200).send(`Hello from backend ${config.basePath}!`);
  next();
});

router.get('/greeting', (req, res, next) => {
  console.log(
    `Responding: Hello again from ${config.environment} environment with basepath ${config.basePath}!`
  );
  res
    .status(200)
    .send(
      `Hello again from ${config.environment} environment with basepath ${config.basePath}!`
    );
  next();
});

router.get('/products', (req, res, next) => {
  console.log(
    `Products BasePath: ${config.basePath}, Size: ${products.length}, Contents: ${products}`
  );
  res.status(200).send(products);
  next();
});

module.exports = router;

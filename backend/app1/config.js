const dotenv = require('dotenv');
const path = require('path');

console.log(process.env.NODE_ENV);

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: process.env.PORT || 3000,
  basePath: '/app1',
  environment: process.env.environment || 'test',
};

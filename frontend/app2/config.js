const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: process.env.PORT || 5000,
  backendurl: process.env.url,
  basePath: '/app2',
};

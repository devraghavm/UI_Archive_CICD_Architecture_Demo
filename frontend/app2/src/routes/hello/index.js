const config = require('../../../config.js');
const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.status(200).send(`Hello from frontend from ${config.basePath}!!!`);
  next();
});

router.get('/api', async (req, res, next) => {
  try {
    const response = await axios(
      `${config.backendurl}${config.basePath}/greeting`
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
  next();
});

module.exports = router;

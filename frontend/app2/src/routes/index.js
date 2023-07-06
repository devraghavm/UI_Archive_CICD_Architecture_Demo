const router = require('express').Router();
const hello = require('./hello');
var cors = require('cors');
router.use(cors());

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.use('/', hello);

module.exports = router;

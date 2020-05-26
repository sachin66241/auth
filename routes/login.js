var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('This is home page');
});

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.send('This is login page');
});

module.exports = router;

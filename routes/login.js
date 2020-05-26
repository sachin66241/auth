var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login');
});

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login');
});

module.exports = router;

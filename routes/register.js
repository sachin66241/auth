var express = require('express');
var router = express.Router();

/* GET register form */
router.get('/register', (req, res, next)=> {
  res.render('register');
});

/* POST register form */
router.post('/register', (req, res, next)=> {
  console.log(req.body)
})
module.exports = router;



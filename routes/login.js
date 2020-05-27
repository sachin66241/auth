var express = require('express');
var router = express.Router();
var Login = require('../controller/login')
const sha256 = require('sha256');



/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login',{status:"2"});
});

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login',{status:"2"});
});

/* POST login page. */

router.post('/login', async(req, res, next) => {
  const {password} = req.body;
  const {email} = req.body;
  const entry = new Login();

  /*SHA256 Encryption for password */
  const encrypted_password = sha256(password);
  var result = await entry.login(email,encrypted_password);
  if(!result){
    res.render('login',{status:"0"})
  }
  else{
    res.render('login',{status:"1"})

  }
});

module.exports = router;

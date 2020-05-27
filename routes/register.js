var express = require('express');
var router = express.Router();
var Signup = require('../controller/register')
const sha256 = require('sha256')
/* GET register form */
router.get('/register', (req, res, next)=> {
  res.render('register',{status:"2"});
});

/* POST register form */
router.post('/register', async (req, res, next)=> {
  
  const {first_name} = req.body;
  const {last_name} = req.body;
  const {email} = req.body;
  const {password} = req.body;
  const {dob} = req.body;
    /*SHA256 Encryption for password */

  const encrypted_password = sha256(password)
  const entry = new Signup();
  var result = await entry.signup(first_name,last_name,email,encrypted_password,dob);
  if(!result){
    res.render('register',{status:"0"})
  }
  else{
    res.render('register',{status:"1"})
  }
 
})

module.exports = router;



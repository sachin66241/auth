var express = require('express');
var router = express.Router();
var Signup = require('../controller/register')

/* GET register form */
router.get('/register', (req, res, next)=> {
  res.render('register');
});

/* POST register form */
router.post('/register', async (req, res, next)=> {
  
  const {first_name} = req.body;
  const {last_name} = req.body;
  const {email} = req.body;
  const {password} = req.body;
  const {dob} = req.body;

  console.log(req.body)
  const entry = new Signup();
  var result = await entry.signup(first_name,last_name,email,password,dob);
  console.log(result)
})

module.exports = router;



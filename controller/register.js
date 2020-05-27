 
const registers = require("../model/register");

class Signup {
    constructor() {
       // this._registers = new registers;
    }
   
    async signup(first_name, last_name, email, password, dob) {

      const cross_check = await registers.organizations.find({ email}, '_id');
      if (cross_check.length) {
         return false;
      }
      const register=  new registers.organizations({ first_name, last_name, email, password, dob });
      const result = await register.save();
      if (result) {
        return result._id;
      } else {
        return false;
      }
          
     }
          
    
}

module.exports = Signup;
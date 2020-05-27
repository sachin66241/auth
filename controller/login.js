 
const registers = require("../model/register");

class Login {
    constructor() {
       // this._loginSchema = new loginSchema();
    }
    async login(email, password) {
            const result = await registers.organizations.find({ email, password }, '_id');
            if (result.length) {
              return result[0]._id;
            }
            else return false;
          }
    
   
}

module.exports = Login;
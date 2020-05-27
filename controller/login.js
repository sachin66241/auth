 
const loginSchema = require("../models/user");

class Login {
    constructor() {
        this._loginSchema = new loginSchema();
    }
    async login(email, password) {
        const isUserExist = await this._userModel.findUser(email, password);
        return isUserExist;
    }
   
}

module.exports = Login;
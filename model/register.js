const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({ 
    first_name: String,
    last_name: String,
    email: { 
      type: String, 
      required: true,
      unique: true
    },
    password: String,
    birthday: String
  }
);

const organizations = mongoose.model('organizations', registerSchema);

exports.organizations = organizations;

const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({

name:{
  type: String,
  required: true,
  
},
age: {
  type: Number,
  required: true,
  
},
gender:{
  type: String,
  required: true,
  
},

},{
  timestamps: true
}
)


const Users = mongoose.model('User',UserSchema)

module.exports = Users;
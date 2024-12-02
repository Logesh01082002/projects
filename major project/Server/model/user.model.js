const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  role:{
    type: String,
    default:"user"
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailID: {
    type: String,
    required: true,
  },
  DOB:{
    type: Date,
    required: true,
  },
  Password:{
    type: String,
    required: true,
  },
  Questions:{
    type: Object,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;


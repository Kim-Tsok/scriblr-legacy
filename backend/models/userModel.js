const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (
  firstName,
  lastName,
  username,
  email,
  password
) {
  // validation
  if (!email || !password) {
    throw Error("All field must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("Password not strong enough");
  // }
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email or username already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    username,
    email,
    password: hash,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All field must be filled");
  }

  const user = await this.findOne({ username });

  if (!user) {
    throw Error("Incorrect username");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};
module.exports = mongoose.model("User", userSchema);

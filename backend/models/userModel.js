import { Schema as _Schema, model } from "mongoose";
import { genSalt, hash as _hash, compare } from "bcrypt";
import { isEmail, isStrongPassword } from "validator";

const Schema = _Schema;
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
  avatar: {
    type: Object,
  },
  avatarLink: {
    type: String,
  },
});

// static signup method
userSchema.statics.signup = async function (
  firstName,
  lastName,
  username,
  email,
  password,
  avatarLink
) {
  // validation
  if (!email || !password) {
    throw Error("All field must be filled");
  }
  if (!isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email or username already in use");
  }

  const salt = await genSalt(10);
  const hash = await _hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    username,
    email,
    password: hash,
    avatarLink,
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

  const match = await compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};
export default model("User", userSchema);

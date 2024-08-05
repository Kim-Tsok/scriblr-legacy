const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (_id) => {
  jwt.sign({ _id }, process.env.SECRET, { expiresIn: "7d" });
};

// login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    const user = await User.signup(
      firstName,
      lastName,
      username,
      email,
      password
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };

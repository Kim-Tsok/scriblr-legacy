const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "7d" });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);

    res.status(200).json({
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({ error: error.message });
  }
};

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
    const token = createToken(user._id);

    res.status(201).json({
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };

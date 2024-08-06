const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user) => {
  return jwt.sign(
    { _id: user._id, username: user.username },
    process.env.SECRET,
    { expiresIn: "7d" }
  );
};

// login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
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
    const token = createToken(user);

    res.status(201).json({
      _id: user._id,
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

import User from "../models/userModel.js";
import jwtPkg from "jsonwebtoken";
const { sign } = jwtPkg;

const createToken = (_id) => {
  return sign({ _id }, process.env.SECRET, { expiresIn: "7d" });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);

    res.status(200).json({
      username: user.username,
      email: user.email,
      avatarLink: user.avatarLink,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { firstName, lastName, username, email, password, avatarLink } =
    req.body;

  try {
    const user = await User.signup(
      firstName,
      lastName,
      username,
      email,
      password,
      avatarLink
    );
    const token = createToken(user._id);

    res.status(201).json({
      firstName: user.firstName,
      username: user.username,
      email: user.email,
      avatarLink: user.avatarLink,
      token,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(400).json({ error: error.message });
  }
};

export default { signupUser, loginUser };

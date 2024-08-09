const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// controller functions
const { signupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Create and send JWT token here
    const token = createToken(req.user);
    res.redirect(`/login-success?token=${token}`);
  }
);

module.exports = router;

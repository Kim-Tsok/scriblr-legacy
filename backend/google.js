const passport = require("passport");
const User = require("../models/userModel");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5173/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = await User.create({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            username: profile.emails[0].value.split("@")[0],
            email: profile.emails[0].value,
            password: "google-auth", // You might want to handle this differently
          });
        }
        return cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

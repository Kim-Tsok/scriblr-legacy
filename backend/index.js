require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const contentRoutes = require("./routes/content");
const emailRoutes = require("./routes/email");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
// routes
app.use(bodyParser.json());
app.use("/api/contents", contentRoutes);
app.use("/api/emails", emailRoutes);

app.use(
  cors({
    origin: "https://scriblr.vercel.app",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  res.setHeader("Access-Control-Allow-Methods", [
    "GET",
    "POST",
    "DELETE",
    "PATCH",
  ]);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

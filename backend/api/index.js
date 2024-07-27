require("dotenv").config();

const express = require("express");
const contentRoutes = require("./routes/content");
const emailRoutes = require("./routes/email");
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload"); // Ensure correct import

const app = express();

// middleware
app.use(express.json({ limit: "50mb" }));
app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://scriblr.vercel.app"); // Allow requests from your frontend
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
  next();
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/contents", contentRoutes);
app.use("/api", emailRoutes);

// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.CLOUDINARY_URL,
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

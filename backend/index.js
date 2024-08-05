require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const contentRoutes = require("./routes/content");
const emailRoutes = require("./routes/email");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// CORS middleware (should be one of the first middleware)
const allowedOrigins = ["https://scriblr.vercel.app", "http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Body parser middleware
app.use(bodyParser.json());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// Logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/contents", contentRoutes);
app.use("/api/emails", emailRoutes);
app.use("/api/user", userRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

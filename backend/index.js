import dotenv from "dotenv";

dotenv.config();
import express, { json, urlencoded, static as static_ } from "express";

import jsonPkg from "body-parser";
const { json: _json } = jsonPkg;
import { connect } from "mongoose";
import cors from "cors";
// Routes imports
import bookRoutes from "./routes/contents/book.js";
import emailRoutes from "./routes/email.js";
import userRoutes from "./routes/user.js";

const app = express();

// CORS middleware
const allowedOrigins = ["https://scriblr.vercel.app", "http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let msg =
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
app.use(_json());

app.use(json({ limit: "1024mb" }));
app.use(urlencoded({ limit: "1024mb", extended: false }));
// Logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/emails", emailRoutes);
app.use("/api/user", userRoutes);

// // Serve images folder as static
// app.use("/books", static_(path.join(__dirname, "books")));
// app.use(static_(path.join(__dirname, "..", "build")));

// Connect to db
connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

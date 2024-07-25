require("dotenv").config();

const express = require("express");
const contentRoutes = require("./routes/content");
const emailRoutes = require("./routes/email");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/contents", contentRoutes);
app.use("/api/emails", emailRoutes);

// // connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

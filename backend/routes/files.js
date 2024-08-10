const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose"); // Added mongoose import
const crypto = require("crypto"); // Added for generating file names
const path = require("path"); // Added for handling file extensions
const File = require("../models/bookModel"); // Assuming this is your Mongoose model for files
const { GridFsStorage } = require("multer-gridfs-storage");
const Router = express.Router();

// MongoDB URI
const mongoURI = process.env.MONGO_URI;

// Create mongoose connection
const connect = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var gfs;
connect.once("open", () => {
  console.log("MongoDB connected and initializing gfs");
  // Initialize GridFS stream
  gfs = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName: "uploads",
  });
});

// GridFS storage setup
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

Router.post("/books", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // Assuming `req.file` contains the necessary GridFS file metadata
    // The GridFS storage engine adds a `fileId` to `req.file` object that represents the `_id` in MongoDB
    const fileId = req.file.id; // Make sure this matches how your file storage is configured

    const newFile = new File({
      filename: req.file.filename,
      fileId: fileId, // Set the fileId here
      filepath: req.file.filename, // Adjust according to your needs
      filetype: req.file.contentType,
      size: req.file.size,
    });

    await newFile.save();
    res.json({ message: "File uploaded successfully", file: req.file });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).send("Error while uploading file. Try again later.");
  }
});

Router.get("/all", async (req, res) => {
  if (!gfs) {
    console.error("Trying to access GridFS before it is initialized.");
    return res.status(500).send("Server is not ready");
  }
  // Removed connectToDatabase as it was not defined in the provided code
  try {
    const files = await gfs.find().toArray();
    const fileList = files.map((file) => ({
      id: file._id,
      filename: file.filename,
      size: file.length,
      uploadDate: file.uploadDate,
    }));
    res.json(fileList);
  } catch (error) {
    console.error("Error while fetching files from GridFS", error);
    res.status(500).send("Error while fetching files");
  }
});

Router.get("/:filename", (req, res) => {
  try {
    const filename = req.params.filename;
    const readStream = gfs.openDownloadStreamByName(filename);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).send("Error downloading file");
  }
});

module.exports = Router;

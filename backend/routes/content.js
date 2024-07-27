const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {
  getContents,
  getContent,
  createContent,
  deleteContent,
  updateContent,
} = require("../controllers/contentController");

const router = express.Router();
const mongoose = require("mongoose");
// GET all contents
router.get("/", getContents);

// GET a single content
router.get("/:id", getContent);

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Create a folder in Cloudinary
    format: async (req, file) => extname(file.originalname),
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      return file.originalname.split(".")[0] + "_" + uniqueSuffix;
    },
  },
});

const upload = multer({ storage });

// POST a new content
router.post("/", upload.single("image"), createContent);

// DELETE a new content
router.delete("/:id", deleteContent);

// UPDATE a new content
router.patch("/:id", updateContent);
module.exports = router;

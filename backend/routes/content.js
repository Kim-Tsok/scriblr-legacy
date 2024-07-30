const express = require("express");
const cors = require("cors");
const {
  getContents,
  getContent,
  createContent,
  deleteContent,
  updateContent,
} = require("../controllers/contentController");

const router = express.Router();
// GET all contents
router.get("/", cors(), getContents);

// GET a single content
router.get("/:id", cors(), getContent);

// POST a new content
router.post("/", cors(), createContent);

// DELETE a new content
router.delete("/:id", deleteContent);

// UPDATE a new content
router.patch("/:id", updateContent);
module.exports = router;

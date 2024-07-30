const express = require("express");
const {
  getContents,
  getContent,
  createContent,
  deleteContent,
  updateContent,
} = require("../controllers/contentController");

const router = express.Router();
// GET all contents
router.get("/", getContents);

// GET a single content
router.get("/:id", getContent);

// POST a new content
router.post("/", createContent);

// DELETE a new content
router.delete("/:id", deleteContent);

// UPDATE a new content
router.patch("/:id", updateContent);
module.exports = router;

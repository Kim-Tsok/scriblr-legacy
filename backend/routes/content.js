const express = require("express");
const {
  getContents,
  getContent,
  createContent,
  deleteContent,
  updateContent,
} = require("../controllers/contentController");

const router = express.Router();
const mongoose = require("mongoose");
// GET all workouts
router.get("/", getContents);

// GET a single workout
router.get("/:id", getContent);

// POST a new workout
router.post("/", createContent);

// DELETE a new workout
router.delete("/:id", deleteContent);

// UPDATE a new workout
router.patch("/:id", updateContent);
module.exports = router;

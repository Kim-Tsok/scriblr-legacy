const express = require("express");
const Content = require("../models/contentModel");

const router = express.Router();
const mongoose = require("mongoose");
// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all books" });
});

// GET a single workout
router.get("/:id", (res, req) => {
  res.json({ mssg: "GET a single book" });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, about } = req.body;

  try {
    const content = await Content.create({ title, about });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: "POST a new book" });
});

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new book" });
});

// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new book" });
});
module.exports = router;

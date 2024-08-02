const express = require("express");
const cors = require("cors");
const {
  createEmail,
  getEmails,
  getEmail,
  deleteEmail,
} = require("../controllers/emailController");

const router = express.Router();
router.use(cors());
const mongoose = require("mongoose");

// GET all emails
router.get("/", cors(), getEmails);
// POST a new email
router.post("/", cors(), createEmail);

// GET a single content
router.get("/:id", cors(), getEmail);

// DELETE a new content
router.delete("/:id", deleteEmail);

module.exports = router;

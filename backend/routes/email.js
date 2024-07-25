const express = require("express");
const { createEmail, getEmails } = require("../controllers/emailController");

const router = express.Router();
const mongoose = require("mongoose");

// GET all emails
router.get("/", getEmails);
// POST a new email
router.post("/", createEmail);

module.exports = router;

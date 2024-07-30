const express = require("express");
const cors = require("cors");
const { createEmail, getEmails } = require("../controllers/emailController");

const router = express.Router();
router.use(cors());
const mongoose = require("mongoose");

// GET all emails
router.get("/", cors(), getEmails);
// POST a new email
router.post("/", cors(), createEmail);

module.exports = router;

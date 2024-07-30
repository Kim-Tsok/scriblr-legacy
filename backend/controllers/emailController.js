const Email = require("../models/emailModel");
const mongoose = require("mongoose");

//get all emails
const getEmails = async (req, res) => {
  const emails = await Email.find({}).sort({ createdAt: -1 });

  res.status(200).json(emails);
};

// create new email
const createEmail = async (req, res) => {
  const { email } = req.body;

  // add to db
  try {
    const email = await Email.create({ email });
    res.status(200).json(email);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEmails,
  createEmail,
};

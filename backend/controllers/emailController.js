import Email from "../models/emailModel.js";
import { Types } from "mongoose";

// get a single email
const getEmail = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }
  const email = await Email.findById(id);

  if (!email) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(email);
};

//get all emails
const getEmails = async (req, res) => {
  const emails = await Email.find({}).sort({ createdAt: -1 });

  res.status(200).json(emails);
};
const createEmail = async (req, res) => {
  const { email, name } = req.body;

  // Validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  if (!email || !name) {
    return res.status(400).json({ error: "All fields must be filled" });
  }
  const exists = await Email.findOne({ email });
  if (exists) {
    throw Error("Email already joint");
  }

  // Submitting name & email
  try {
    const waitlist = await Email.create({ email, name });
    res.status(200).json(waitlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a email
const deleteEmail = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }

  const email = await Email.findOneAndDelete({ _id: id });

  if (!email) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(email);
};

export { getEmail, getEmails, createEmail, deleteEmail };

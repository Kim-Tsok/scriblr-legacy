const Content = require("../models/contentModel");
const cloudinary = require("../cloudinary");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { json } = require("body-parser");

//get all content
const getContents = async (req, res) => {
  const contents = await Content.find({}).sort({ createdAt: -1 });

  res.status(200).json(contents);
};

// get a single content
const getContent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }
  const content = await Content.findById(id);

  if (!content) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(content);
};

// create new content
const createContent = async (req, res) => {
  const { title, about, cover } = req.body;

  try {
    if (cover) {
      const uploadRes = await cloudinary.uploader.upload(cover, {
        upload_preset: "scriblr",
      });
      if (uploadRes) {
        const content = new Content({
          title,
          about,
          cover: uploadRes,
        });

        const savedContent = await content.save();

        res.status(200).send(savedContent);
      }
    }
  } catch (error) {
    console.error("Error creating content:", error);
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteContent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }

  const content = await Content.findOneAndDelete({ _id: id });

  if (!content) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(content);
};

//Update Content
const updateContent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }

  const content = await Content.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!content) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(content);
};

module.exports = {
  getContents,
  getContent,
  createContent,
  deleteContent,
  updateContent,
};

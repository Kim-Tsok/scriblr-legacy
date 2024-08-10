const Book = require("../models/bookModel");
const cloudinary = require("../cloudinary");
const mongoose = require("mongoose");
const multer = require("multer");

//get all books
const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });

  res.status(200).json(books);
};

// get a single book
const getBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }
  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(book);
};

// create new book
const createBook = async (req, res) => {
  const { title, about, cover } = req.body;

  try {
    if (cover) {
      const uploadRes = await cloudinary.uploader.upload(cover, {
        upload_preset: "scriblr",
      });
      if (uploadRes) {
        const book = new Content({
          title,
          about,
          cover: uploadRes,
        });

        const savedBook = await book.save();

        res.status(200).send(savedBook);
      }
    }
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(400).json({ error: error.message });
  }
};

// delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  if (!book) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(book);
};

//Update Book
const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }

  const book = await Book.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!book) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(book);
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
};

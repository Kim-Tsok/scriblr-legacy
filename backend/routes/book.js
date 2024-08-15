const express = require("express");
const cors = require("cors");
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");
const router = express.Router();
router.use(cors());
// GET all Books
router.get("/", getBooks);

// GET a single Book
router.get("/:id", getBook);

// POST a new Book
router.post("/", createBook);

// DELETE a new Book
router.delete("/:id", deleteBook);

// UPDATE a new Book
router.patch("/:id", updateBook);
module.exports = router;

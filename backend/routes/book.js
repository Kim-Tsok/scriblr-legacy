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
router.get("/", cors(), getBooks);

// GET a single Book
router.get("/:id", cors(), getBook);


// POST a new Book
router.post("/", cors(), createBook);

// DELETE a new Book
router.delete("/:id", deleteBook);

// UPDATE a new Book
router.patch("/:id", updateBook);
module.exports = router;

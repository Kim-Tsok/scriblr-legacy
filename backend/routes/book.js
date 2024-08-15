import { Router } from "express";
import cors from "cors";
import {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} from "../controllers/bookController";
const router = Router();
router.use(cors());
// GET all Books
router.get("/", getBooks);

// GET a single Book
router.get("/:id", cors(), getBook);

// POST a new Book
router.post("/", cors(), createBook);

// DELETE a new Book
router.delete("/:id", deleteBook);

// UPDATE a new Book
router.patch("/:id", updateBook);
export default router;

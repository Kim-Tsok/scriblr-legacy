const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const cors = require("cors");
const {
  getContents,
  getContent,
  createContent,
  deleteContent,
  updateContent,
} = require("../controllers/contentController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
router.use(cors());
// GET all contents
router.get("/", cors(), getContents);

// GET a single content
router.get("/:id", cors(), getContent);

// require auth for routes below
router.use(requireAuth);
// POST a new content
router.post("/", cors(), createContent);

// DELETE a new content
router.delete("/:id", deleteContent);

// UPDATE a new content
router.patch("/:id", updateContent);
module.exports = router;

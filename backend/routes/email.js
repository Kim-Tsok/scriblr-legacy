import { Router } from "express";
import cors from "cors";
import {
  createEmail,
  getEmails,
  getEmail,
  deleteEmail,
} from "../controllers/emailController.js";

const router = Router();
router.use(cors());

// GET all emails
router.get("/", cors(), getEmails);
// POST a new email
router.post("/", cors(), createEmail);

// GET a single content
router.get("/:id", cors(), getEmail);

// DELETE a new content
router.delete("/:id", deleteEmail);

export default router;

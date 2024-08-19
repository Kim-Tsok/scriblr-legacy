import { Router } from "express";

// controller functions
import { default as _default } from "../controllers/userController.js";
const { signupUser, loginUser } = _default;

const router = Router();

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

export default router;

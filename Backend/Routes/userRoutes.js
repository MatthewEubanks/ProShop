import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../Controllers/userController.js";
import { protect } from "../Middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;

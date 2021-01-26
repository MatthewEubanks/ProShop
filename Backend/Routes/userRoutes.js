import express from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../Controllers/userController.js";
import { protect } from "../Middleware/authMiddleware.js";

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;

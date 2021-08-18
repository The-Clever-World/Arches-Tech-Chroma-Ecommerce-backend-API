import express from "express";

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

import { authProtect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(authProtect, getUserProfile)
  .put(authProtect, updateUserProfile);

export { router as userRouter };

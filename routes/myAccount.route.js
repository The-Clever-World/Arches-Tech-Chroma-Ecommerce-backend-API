import express from "express";
import { myAccountController } from "../controllers/myAccount.controller.js";
const router = express.Router();

router.get("/", myAccountController)

export { router as myAccountRouter }
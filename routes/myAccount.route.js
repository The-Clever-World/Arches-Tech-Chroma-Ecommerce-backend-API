import express from "express";
import { myAccountController, myOrders, myProfile } from "../controllers/myAccount.controller.js";
const router = express.Router();

router.get("/", myAccountController)
router.get("/order/:userId", myOrders)
router.get("/myProfile", myProfile)

export { router as myAccountRouter }
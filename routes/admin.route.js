import express from "express";

import {
  addProductWithCategory,
  getUserList,
  orderList,
  updateOrderToDelivered,
  updateOrderToPaid,
} from "../controllers/admin.controller.js";

import { adminCheck, authProtect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authProtect, adminCheck, getUserList);
router.post("/product/new", authProtect, adminCheck, addProductWithCategory);
router.get("/order/orderlist", authProtect, adminCheck, orderList);
router.post(
  "/order/:id/update/paid",
  authProtect,
  adminCheck,
  updateOrderToPaid
);
router.post(
  "/order/:id/update/delivered",
  authProtect,
  adminCheck,
  updateOrderToDelivered
);

export { router as adminRouter };

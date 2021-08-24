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

router.get("/", getUserList);
router.post("/product/new", addProductWithCategory);
router.get("/order/orderlist", orderList);
router.post("/order/:id/update/paid", updateOrderToPaid);
router.post("/order/:id/update/delivered", updateOrderToDelivered);

export { router as adminRouter };

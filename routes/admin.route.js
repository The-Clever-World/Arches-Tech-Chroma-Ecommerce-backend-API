import express from "express";

import {
  addProductWithCategory,
  getUserList,
  getAllProducts,
  orderList,
  updateOrderToDelivered,
  updateOrderToPaid,
} from "../controllers/admin.controller.js";

import { adminCheck, authProtect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authProtect, adminCheck, getUserList);
router.post("/product/new", addProductWithCategory);
router.get("/product/productlist", getAllProducts);
router.get("/order/orderlist", orderList);
router.put("/order/:id/update/paid", updateOrderToPaid);
router.put("/order/:id/update/delivered", updateOrderToDelivered);

export { router as adminRouter };

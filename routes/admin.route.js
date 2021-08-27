import express from "express";

import {
  addProductWithCategory,
  getUserList,
  getAllProducts,
  orderList,
  updateOrderToDelivered,
  updateOrderToPaid,
  addNewProductPage,
} from "../controllers/admin.controller.js";

import { adminCheck, authProtect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getUserList);
router.post("/product/new", addProductWithCategory);
router.get("/product/new", addNewProductPage);
router.get("/product/productlist", getAllProducts);
router.get("/order/orderlist", orderList);
router.put("/order/:id/update/paid", updateOrderToPaid);
router.put("/order/:id/update/delivered", updateOrderToDelivered);

export { router as adminRouter };

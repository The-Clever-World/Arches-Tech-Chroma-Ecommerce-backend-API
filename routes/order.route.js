import express from "express";

import {
  createOrder,
  orderDetails,
  addShippingToOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/new", createOrder);
router.post("/add-shipping", addShippingToOrder);
router.post("/:id", orderDetails);

export { router as orderRouter };

import express from "express";

import {
  createOrder,
  orderDetails,
  addBillingToOrder,
  addShippingToOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/new", createOrder);
router.post("/add-shipping", addShippingToOrder);
router.post("/add-billing", addBillingToOrder);
router.get("/:id", orderDetails);

export { router as orderRouter };

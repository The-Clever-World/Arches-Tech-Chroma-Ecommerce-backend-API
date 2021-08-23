import express from "express";

import { createOrder, myOrderList } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/new", createOrder);
router.post("/:id", myOrderList);

export { router as orderRouter };

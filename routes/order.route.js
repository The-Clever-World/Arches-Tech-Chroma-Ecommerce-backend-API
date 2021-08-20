import express from "express";

import {
    orderList,
    createOrder,
    myOrderList
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", orderList);
router.post("/new", createOrder);
router.post("/:id", myOrderList);

export { router as orderRouter };

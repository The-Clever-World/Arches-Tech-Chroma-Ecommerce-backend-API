import express from "express";

import {
    orderList,
    createOrder,
    myOrderList,
    updateOrderToDelivered,
    updateOrderToPaid
} from "../controllers/order.controller.js";

const router = express.Router();

// ADMIN ///
router.get("/", orderList);
router.put("/update/paid/:id", updateOrderToPaid);
router.put("/update/delivered/:id", updateOrderToDelivered);

router.post("/new", createOrder);
router.post("/:id", myOrderList);

export { router as orderRouter };

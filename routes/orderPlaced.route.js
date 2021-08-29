import express from "express";

import { orderPlaced } from "../controllers/orderPlaced.controller.js";

const router = express.Router();

router.get("/:id", orderPlaced);

export { router as orderPlacedRouter };

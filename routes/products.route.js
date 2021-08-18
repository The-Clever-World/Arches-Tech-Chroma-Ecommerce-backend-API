import express from "express";

import {
  getProductFromSearch,
  getProductsFromId,
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/search/", getProductFromSearch);
router.get("/:id", getProductsFromId);

export { router as productRouter };

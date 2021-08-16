import express from "express";

import {
  getAllCategories,
  getProductsFromCategory,
  getProductFromSearch,
} from "../controllers/categories.controller.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/search/", getProductFromSearch);
router.get("/:id", getProductsFromCategory);

export { router as categoryRouter };

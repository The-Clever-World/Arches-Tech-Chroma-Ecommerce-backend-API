import express from "express";

import {
  getAllCategories,
  getProductsFromCategory,
  addProductWithCategory
} from "../controllers/categories.controller.js";

const router = express.Router();

// ADMIN //
router.post("/addProduct", addProductWithCategory);

router.get("/", getAllCategories);
router.get("/:id", getProductsFromCategory);

export { router as categoryRouter };

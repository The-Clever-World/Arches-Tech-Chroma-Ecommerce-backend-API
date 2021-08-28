import express from "express";

import {
  getAllCategories,
  getProductsFromCategory,
} from "../controllers/categories.controller.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getProductsFromCategory);

export { router as categoryRouter };

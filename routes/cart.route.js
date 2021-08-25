import express from "express";

import {
  getAllProductsFromCart,
  InsertProductIntoCart,
  DeleteProductFromCart,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/:id", getAllProductsFromCart);
router.put("/add/:id/", InsertProductIntoCart);
router.delete("/:id", DeleteProductFromCart);

export { router as CartRouter };

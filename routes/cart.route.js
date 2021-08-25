import express from "express";

import {
  getAllProductsFromCart,
  InsertProductIntoCart,
  DeleteProductFromCart,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/:id", getAllProductsFromCart);
router.put("/add/:id/", InsertProductIntoCart);
router.delete("/delete/:productId/:userId", DeleteProductFromCart);

export { router as CartRouter };

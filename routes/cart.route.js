import express from "express";

import {
  getAllProductsFromCart,
  InsertProductIntoCart,
  DeleteProductFromCart,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", getAllProductsFromCart);
router.put("/:id", InsertProductIntoCart);
router.delete("/:id", DeleteProductFromCart);

export { router as CartRouter };

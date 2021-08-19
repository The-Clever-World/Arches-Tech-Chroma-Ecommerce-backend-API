import Product from "../models/product.model.js";
import mongoose from "mongoose";
import Category from "../models/categories.model.js";
/**
 * @purpose get all product from a search
 * @route GET /products/search/?searched="text-words"
 * @access Public
 */

export const getProductFromSearch = async (req, res, next) => {
  const slug = req.query?.searched;
  if (!slug) {
    res.status(404);
    const error = new Error("No Query Provided");
    next(error);
  }

  const products = await Product.find({ $text: { $search: slug } });

  console.log(products);
  res.status(200).send(products);
};

// $regex: /789$/

/**
 * @purpose get particular product from id
 * @route GET /products/:id
 * @access Public
 */

export const getProductsFromId = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    const categories = await Category.find().populate("products");
    if (!product) {
      res.status(404);
      const error = new Error("No product found");
      next(error);
    }

    res.status(200).render("product.ejs", { product, categories });
  } catch (error) {
    console.log(error);
  }
};

// $regex: /789$/

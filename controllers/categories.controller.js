import Category from "../models/categories.model.js";
import Product from "../models/product.model.js";
/**
 * @purpose get all categories
 * @route  GET /categories/
 * @access  Public
 */

export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find();
  if (!categories) {
    res.status(404);
    const error = new Error("No categories found");
    next(error);
  }
  res.status(200).send(categories);
};

/**
 * @purpose get all product from a specific category
 * @route GET /categories/:id
 * @access Public
 */

export const getProductsFromCategory = async (req, res, next) => {
  const products = await Category.findById(req.params.id).populate("products");

  if (!products) {
    res.status(404);
    const error = new Error("No Products found");
    next(error);
  }

  res.status(200).send(products);
};

// place this in product controllers. just for tests

/**
 * @purpose get all product from a search
 * @route GET /categories/search/?searched="text-words"
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

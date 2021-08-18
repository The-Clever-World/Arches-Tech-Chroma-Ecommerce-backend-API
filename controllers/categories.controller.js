import Category from "../models/categories.model.js";
import Product from "../models/product.model.js";
/**
 * @purpose get all categories
 * @route  GET /categories/
 * @access  Public
 */

export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find().populate("products");
  if (!categories) {
    res.status(404);
    const error = new Error("No categories found");
    next(error);
  }
  res.status(200);
  res.render("index", { categories: categories });
};

/**
 * @purpose get all product from a specific category
 * @route GET /:id
 * @access Public
 */

export const getProductsFromCategory = async (req, res, next) => {
  const categoryProducts = await Category.findById(req.params.id).populate(
    "products"
  );

  if (!categoryProducts) {
    res.status(404);
    const error = new Error("No Products found");
    next(error);
  }

  console.log(categoryProducts);

  res
    .status(200)
    .render("category.ejs", { categoryProducts: categoryProducts });
};


import Product from "../models/product.model.js";
/**
 * @purpose get category by id
 * @route  GET /products/:id
 * @access  Public
 */

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    const error = new Error("No product found");
    next(error);
  }
  res.status(200);
  //   res.render("product", { product });
};

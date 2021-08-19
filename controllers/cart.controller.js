import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

/**
 * @purpose get all products from cart
 * @route   GET /cart/
 * @access  Public
 */

export const getAllProductsFromCart = async (req, res, next) => {
  const products = await Cart.find().populate("products");

  // res.status(200).render("cart", { cartItems: products });
  res.status(200).send(products);
};

/**
 * @purpose insert product to cart
 * @route   PUT /cart/:id
 * @access  Public
 */

export const InsertProductIntoCart = async (req, res, next) => {
  const productId = req.params.id;
  const cartItems = await Cart.find();

  if (cartItems.products.includes(productId)) next();

  cartItems[0].products.push(productId);
  await cartItems.save();
  // res.status(204).render("cart.ejs", { cartItems });
  res.status(204).send(cartItems);
};

/**
 * @purpose delete product from cart
 * @route   DELETE /cart/:id
 * @access  Public
 */

export const DeleteProductFromCart = async (req, res, next) => {
  const productId = req.params.id;

  // TODO find cart by user and update

  const cartItems = await Cart.find();

  // [{products: [...]}]

  // res.status(204).render("cart.ejs", { cartItems });
  res.status(200).send(cartItems);
};

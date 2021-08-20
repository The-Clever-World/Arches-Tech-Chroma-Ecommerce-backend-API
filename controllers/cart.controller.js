import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

/**
 * @purpose get all products from cart
 * @route   GET /cart/
 * @access  Public
 */

export const getAllProductsFromCart = async (req, res, next) => {
  // TODO: get userId and fetch particular cart of that user
  const products = await Cart.find().populate("products");
  console.log(products);
  res.status(200).render("cart", { cartItems: products[0].products });
  //res.status(200).send(products);
};

/**
 * @purpose insert product to cart
 * @route   PUT /cart/:id
 * @access  Public
 */

export const InsertProductIntoCart = async (req, res, next) => {
  // TODO: get userId from query
  const productId = req.params.id;
  // TODO: fetch cart by userId
  const cartItem = await Cart.findOne();
  let newCartItem;

  if (cartItem) {
    if (cartItem.products.includes(productId)) {
      const err = new Error("product already exist");
      next(err);
    } else {
      cartItem.products.push(productId);
      await cartItem.save();
      res.status(200).send(cartItem);
    }
  } else {
    newCartItem = new Cart({
      // TODO: add userId to new cart
      products: [productId],
    });
    const cart = await newCartItem.save();
    res.status(200).send(cart);
  }

  // res.status(204).render("cart.ejs", { cartItems });
};

/**
 * @purpose delete product from cart
 * @route   DELETE /cart/:id
 * @access  Public
 */

export const DeleteProductFromCart = async (req, res, next) => {
  const productId = req.params.id;
  // TODO find cart by user and update
  const cartItem = await Cart.findOne();

  const modifiedCart = cartItem.products.filter(
    (value, index, arr) => value != productId
  );
  console.log(modifiedCart);
  cartItem.products = modifiedCart;

  console.log(cartItem);
  await cartItem.save();

  // res.status(200).render("cart.ejs", { cartItems: cartItem[0].products });
  res.status(200).send(cartItem);
};

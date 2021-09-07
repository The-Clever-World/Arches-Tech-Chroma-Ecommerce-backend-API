import Category from "../models/categories.model.js";

/**
 * @purpose get list of categories
 * @route   GET /my-account/
 * @access  Private
 */

export const myAccountController = async (req, res) => {
  const categories = await Category.find().populate("products");
  res.render("myAccount.ejs", { categories: categories });
};

/**
 * @purpose get list of my orders
 * @route   GET my-account/order/:userId
 * @access  Private
 */

export { myOrders } from "./order.controller.js";

/**
 * @purpose get userDetails
 * @route   GET /my-account/myProfile
 * @access  Private
 */

export const myProfile = async (req, res) => {
  const categories = await Category.find().populate("products");
  res.render("myProfile.ejs", { categories: categories });
};

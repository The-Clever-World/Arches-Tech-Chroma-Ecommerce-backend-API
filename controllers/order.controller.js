import Order from "../models/order.model.js";

/**
 * @purpose get list of orders 
 * @route   GET /order/
 * @access  ADMIN
 */

export const orderList = async (req, res, next) => {
    const orders = await Order.find().populate("products").populate("user");
    // res.status(200).render("cart", { orders: orders});
    res.status(200).send(orders);
};

/**
 * @purpose add cart products to order
 * @route   POST /order/new
 * @params {userId, productId, products}
 * @params products --> list of products id
 * @access  Public
 */

export const createOrder = async (req, res, next) => {
    // TODO: get userId from body
    const { /* userId , */ products, shippingAddress } = req.body;

    const newOrder = new Order({
        // userId: userId,
        products: products,
        shippingAddress: shippingAddress
    })
    await newOrder.save();
    // res.status(204).render("order.ejs", { order: newOrder });
    res.status(200).send(newOrder);
};



// TODO: add myOrders features when auth done
/**
 * @purpose get list of orders of particular userId
 * @route   GET /order/:userId
 * @access  Public
 */

export const myOrderList = async (req, res, next) => {
    // get userId from parameters
    const userId = req.params.id;

    const orders = await Order.find({ user: userId }).populate("products").populate("user");
    // res.status(200).render("cart", { orders: orders});
    res.status(200).send(orders);
};

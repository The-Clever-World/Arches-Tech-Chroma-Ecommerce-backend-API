import Order from "../models/order.model.js";

/**
 * @purpose get list of orders
 * @route   GET /order/
 * @access  ADMIN
 */

export const orderList = async (req, res, next) => {
  const orders = await Order.find().populate("products").populate("user");
  res.status(200).render("dashboard.orderlist.ejs", { orderlist: orders });
  // res.status(200).send(orders);
};

/**
 * @purpose add cart products to order
 * @route   POST /order/new
 * @params {userId, products}
 * @params products --> list of products id
 * @access  Public
 */

export const createOrder = async (req, res, next) => {
  const { userId, products, totalPrice } = req.body;
  console.log(totalPrice);
  const newOrder = new Order({
    user: userId,
    products: products,
    totalPrice: totalPrice,
  });
  console.log(newOrder);
  await newOrder.save();
  // res.status(204).render("order.ejs", { order: newOrder });
  res.status(200).send(newOrder);
};

/**
 * @purpose update particular order and add shipping address
 * @route   POST /order/add-shipping
 * @params { orderId, shippingAddress }
 * @params products --> list of products id
 * @access  Public
 */

export const addShippingToOrder = async (req, res, next) => {
  const { orderId, shippingAddress } = req.body;

  const order = await Order.findById(orderId);

  // add shippingAddress to particular order
  order.shippingAddress = shippingAddress;

  await order.save();
  // res.status(204).render("order.ejs", { order: newOrder });
  res.status(200).send(order);
};

/**
 * @purpose update particular order and add billing address
 * @route   POST /order/add-billing
 * @params { orderId, billingAddress }
 * @params products --> list of products id
 * @access  Public
 */

export const addBillingToOrder = async (req, res, next) => {
  const { orderId, billingAddress } = req.body;

  const order = await Order.findById(orderId);

  // add billingAddress to particular order
  order.billingAddress = billingAddress;

  await order.save();
  // res.status(204).render("order.ejs", { order: newOrder });
  res.status(200).send(order);
};

/**
 * @purpose get order details of particular orderId
 * @route   GET /order/:orderId
 * @access  Public
 */

export const orderDetails = async (req, res, next) => {
  // get orderId from parameters
  const orderId = req.params.id;

  const order = await Order.findOne({ _id: orderId })
    .populate("products")
    .populate("user");

  console.log(order);

  res.status(200).render("order.ejs", { order: order });
  // res.status(200).send(order);
};

// ADMIN //

/**
 * @purpose update order to paid
 * @route   PUT /order/update/paid/:_id
 * @access  ADMIN
 */

export const updateOrderToPaid = async (req, res, next) => {
  // get orderId from parameters
  const orderId = req.params.id;

  const order = await Order.findById(orderId);
  order.isPaid = !order.isPaid;
  await order.save();

  // res.status(200).render("cart", { orders: orders});
  res.status(200).send(order);
};

/**
 * @purpose update order to delivered
 * @route   PUT /order/update/delivered/:_id
 * @access  ADMIN
 */

export const updateOrderToDelivered = async (req, res, next) => {
  // get orderId from parameters
  const orderId = req.params.id;

  const order = await Order.findById(orderId);
  order.isDelivered = !order.isDelivered;
  await order.save();

  // res.status(200).render("cart", { orders: orders});
  res.status(200).send(order);
};

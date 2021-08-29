import Order from "../models/order.model.js";

/**
 * @purpose after order Placed Thank you page
 * @route   GET /orderPlaced/:id
 * @access  Private
 */

export const orderPlaced = async (req, res, next) => {
    const orderId = req.params.id;

    const order = await Order.findById(orderId).populate("products").populate("user");
    res.status(200).render("thank_you.ejs", { order: order });
    // res.status(200).send(orders);
};

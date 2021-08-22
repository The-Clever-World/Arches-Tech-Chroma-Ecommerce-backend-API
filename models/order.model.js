import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Product",
        },
    ],
    shippingAddress: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
    taxPrice: {
        type: Number,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    isDelivered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
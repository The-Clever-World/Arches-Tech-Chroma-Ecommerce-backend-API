import mongoose, { Schema } from "mongoose";

const descriptionSchema = new Schema({
  keyFeatures: [
    {
      type: String,
      required: true,
    },
  ],
  specifications: {
    type: String,
    required: true,
  },
  highlights: {
    type: String,
  },
  overview: {
    type: String,
  },
});

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      reuired: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: descriptionSchema,
    category: [
      {
        type: String,
        required: true,
      },
    ],
    images: [
      {
        type: String,
        required: true,
      },
    ],
    brand: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [ReviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;

import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
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

const ReviewSchema = new mongoose.Schema(
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

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: descriptionSchema,
    images: [
      {
        type: String,
        required: true,
      },
    ],
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

// for index searches
ProductSchema.index({ name: "text" });

const Product = mongoose.model("Product", ProductSchema);
export default Product;

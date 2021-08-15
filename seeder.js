import connectDB from "./config/db.js";

import dotenv from "dotenv";

// models
import User from "./models/userModel.js";
import Product from "./models/product.model.js";
// mocks
import mockUsers from "./__mocks__/users.js";
import mockProducts from "./__mocks__/product.js";

dotenv.config();

connectDB();

/**
 * imports seeder data to MongoDB Atlas
 */
const importData = async () => {
  try {
    // delete stuff before inserting new stuff
    await User.deleteMany();
    await Product.deleteMany();

    // insert mocks
    await User.insertMany(mockUsers);
    await Product.insertMany(mockProducts);

    // logging
    console.log("data imported");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// destroy all data in mongoDB database
const destroyData = async () => {
  try {
    // delete stuff
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("data destroyed");
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();

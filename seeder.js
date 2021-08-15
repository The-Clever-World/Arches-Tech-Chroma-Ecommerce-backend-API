import mongoose from "mongoose";
import connectDB from "./config/db.js";

import dotenv from "dotenv";
import User from "./models/userModel.js";

// mocks
import mockUsers from "./__mocks__/users.js";

// import productData from "./data/mock-products";
// import { mockUsers } from "./data/user";
// import Order from "./model/order.model";

dotenv.config();

connectDB();

/**
 * imports seeder data to MongoDB Atlas
 */
const importData = async () => {
  try {
    // delete stuff before inserting new stuff

    await User.deleteMany();

    // insert mock uses
    await User.insertMany(mockUsers);

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

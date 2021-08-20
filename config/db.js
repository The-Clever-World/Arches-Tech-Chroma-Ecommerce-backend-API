import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

console.log(process.env.MONGO_URI);
const dbConnect = async () => {
  console.log(process.env.MONGO_URI);

  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDb Connected Successfully: ${process.env.MONGO_URI}`
    );
  } catch (error) {
    console.log(
      `Error while connecting to DB: ${error.message}`
    );
    process.exit(1);
  }
};

export default dbConnect;

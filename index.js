import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import dbConnection from "./config/db.js";

import { NotFound, errorhandler } from "./middlewares/errorHandling.js";
import {
  categoryRouter,
  userRouter,
  productRouter,
  CartRouter,
  orderRouter,
  adminRouter,
} from "./routes/index.js";

import path from "path";
import { fileURLToPath } from "url";

// emulating file path as they are not suppored in module imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
dbConnection();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use("/public/", express.static(__dirname + "/public/"));

// view engine
// app.use(["/css", "/products/css"], express.static(__dirname + "/public/css"));
// app.use(
//   ["/images", "/products/images"],
//   express.static(__dirname + "/public/images")
// );
// app.use(["/js", "/products/js"], express.static(__dirname + "/public/js"));

app.set("view engine", "ejs");

///    Routes      ///

app.use("/cart", CartRouter);
app.use("/admin", adminRouter);
app.use("/order", orderRouter);
app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/", categoryRouter);

///    For error handling   ///
app.use(NotFound);
app.use(errorhandler);

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${PORT}`
  );
});

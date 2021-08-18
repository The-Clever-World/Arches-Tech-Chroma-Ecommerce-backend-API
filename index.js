import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import dbConnection from "./config/db.js";

import { NotFound, errorhandler } from "./middlewares/errorHandling.js";
import { categoryRouter, userRouter } from "./routes/index.js";
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
app.use(express.json());

// view engine

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

app.set("view engine", "ejs");

// navigation

// app.get("", (req, res) => {
//   res.render("index");
// });

///    Routes      ///
app.use("/", categoryRouter);
app.use("/user", userRouter);

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

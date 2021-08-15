import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import dbConnection from "./config/db.js";

import { NotFound, errorhandler } from "./middlewares/errorHandling.js";
import UserRoutes from "./routes/userRouter.js";

dotenv.config();
dbConnection();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

///    Routes      ///
app.use("/user", UserRoutes);

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

import dotenv from "dotenv";
dotenv.config();
import express from "express";

import dbConnection from "./config/db.js";
import cors from "cors";

import { NotFound, errorhandler } from "./middlewares/errorHandling.js";

import UserRoutes from "./routes/userRouter.js";

dbConnection();

const app = express();

// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

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

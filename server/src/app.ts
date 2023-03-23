import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";

import AWSS3 from "./config/aws-s3";
import makeDatabase from "./data-access/make-db";
import app_router from "./routes/user-dashboard";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", app_router);

app.listen(process.env.APP_PORT, () =>
  console.log(`Server is listening on port ${process.env.APP_PORT}`)
);

makeDatabase()
  .then(() => new AWSS3())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

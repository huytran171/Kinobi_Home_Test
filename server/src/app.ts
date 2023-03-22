import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import multer from "multer";
const upload = multer();

import AWSS3 from "./config/aws-s3";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.single("file"));

app.listen(process.env.APP_PORT, () =>
  console.log(`Server is listening on port ${process.env.APP_PORT}`)
);

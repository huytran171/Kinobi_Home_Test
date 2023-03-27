import express, { Request, Response } from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import AWSS3 from "./config/aws-s3";
import makeDatabase from "./data-access/make-db";
import app_router from "./routes/user-dashboard";
import { multer_instance } from "./middlewares/file-upload";
import { rate_limiter } from "./config/express-rate-limit";

process.env.NODE_ENV === "production" && app.use(rate_limiter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(multer_instance.single("file"));
app.use("/", app_router);

app.get("/", (_req: Request, res: Response) => {
  return res.send("Express Typescript on Vercel");
});

app.listen(process.env.APP_PORT, () =>
  console.log(`Server is listening on port ${process.env.APP_PORT}.`)
);

makeDatabase()
  .then(() => new AWSS3())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

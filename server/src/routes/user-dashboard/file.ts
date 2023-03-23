import express from "express";

import makeValidator from "../../middlewares/validator";
import makeExpressController from "../../middlewares/express-controller";
import { upload } from "../../middlewares/file-upload";

import {
  createFileController,
  getAllFilesController,
} from "../../controllers/user-dashboard/file";

import { createFileRules } from "../../controllers/user-dashboard/file/validator";

const file_router = express.Router();

file_router.post(
  "/",
  makeValidator(createFileRules),
  upload.single("file"),
  makeExpressController(createFileController)
);

file_router.get("/", makeExpressController(getAllFilesController));

export default file_router;

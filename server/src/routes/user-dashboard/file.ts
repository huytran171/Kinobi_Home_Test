import express from "express";

import makeExpressController from "../../middlewares/express-controller";

import {
  createFileController,
  getAllFilesController,
} from "../../controllers/user-dashboard/file";

const file_router = express.Router();

file_router.post("/", makeExpressController(createFileController));

file_router.get("/", makeExpressController(getAllFilesController));

export default file_router;

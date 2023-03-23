import express from "express";

const app_router = express.Router();

import file_router from "./file";

app_router.use("/file", file_router);

export default app_router;

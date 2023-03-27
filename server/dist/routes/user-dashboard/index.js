"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_router = express_1.default.Router();
var file_1 = __importDefault(require("./file"));
app_router.use("/file", file_1.default);
exports.default = app_router;

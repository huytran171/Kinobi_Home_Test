"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_router = express_1.default.Router();
const file_1 = __importDefault(require("./file"));
app_router.use("/file", file_1.default);
exports.default = app_router;
//# sourceMappingURL=index.js.map
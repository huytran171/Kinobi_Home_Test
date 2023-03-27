"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_controller_1 = __importDefault(require("../../middlewares/express-controller"));
var file_1 = require("../../controllers/user-dashboard/file");
var file_router = express_1.default.Router();
file_router.post("/", (0, express_controller_1.default)(file_1.createFileController));
file_router.get("/", (0, express_controller_1.default)(file_1.getAllFilesController));
exports.default = file_router;

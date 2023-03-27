"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const file_1 = __importDefault(require("../schemas/file"));
const FileModel = mongoose_1.default.model("File", file_1.default);
exports.FileModel = FileModel;
//# sourceMappingURL=index.js.map
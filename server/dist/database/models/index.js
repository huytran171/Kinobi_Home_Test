"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var file_1 = __importDefault(require("../schemas/file"));
var FileModel = mongoose_1.default.model("File", file_1.default);
exports.FileModel = FileModel;

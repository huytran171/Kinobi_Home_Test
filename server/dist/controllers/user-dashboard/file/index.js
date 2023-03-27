"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFilesController = exports.createFileController = void 0;
var create_file_1 = __importDefault(require("./create-file"));
var get_all_files_1 = __importDefault(require("./get-all-files"));
var file_1 = require("../../../usecases/user-dashboard/file");
var createFileController = (0, create_file_1.default)({ createFile: file_1.createFile });
exports.createFileController = createFileController;
var getAllFilesController = (0, get_all_files_1.default)({ getAllFiles: file_1.getAllFiles });
exports.getAllFilesController = getAllFilesController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = exports.createFile = void 0;
var data_access_1 = require("../../../data-access");
var create_file_1 = __importDefault(require("./create-file"));
var get_all_files_1 = __importDefault(require("./get-all-files"));
var createFile = (0, create_file_1.default)({
    fileDb: data_access_1.FileDb,
});
exports.createFile = createFile;
var getAllFiles = (0, get_all_files_1.default)({
    fileDb: data_access_1.FileDb,
});
exports.getAllFiles = getAllFiles;

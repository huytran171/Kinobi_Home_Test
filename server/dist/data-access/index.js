"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDb = void 0;
var make_file_db_1 = __importDefault(require("./make-file-db"));
var models_1 = require("../database/models");
var FileDb = (0, make_file_db_1.default)({ fileDbModel: models_1.FileModel });
exports.FileDb = FileDb;
exports.default = Object.freeze({
    FileDb: FileDb,
});

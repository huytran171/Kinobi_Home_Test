"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDb = void 0;
const make_file_db_1 = __importDefault(require("./make-file-db"));
const models_1 = require("../database/models");
const FileDb = (0, make_file_db_1.default)({ fileDbModel: models_1.FileModel });
exports.FileDb = FileDb;
exports.default = Object.freeze({
    FileDb,
});
//# sourceMappingURL=index.js.map
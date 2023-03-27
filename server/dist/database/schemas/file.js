"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const fileSchema = new Schema({
    file: { type: Object },
    created_at: { type: Date, default: Date.now },
});
fileSchema.index({ created_at: -1 });
exports.default = fileSchema;
//# sourceMappingURL=file.js.map
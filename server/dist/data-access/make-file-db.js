"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = __importDefault(require("../database/entities/file"));
function makeFileDb({ fileDbModel, }) {
    return new (class FileDb {
        getAll() {
            return __awaiter(this, void 0, void 0, function* () {
                const existing = yield fileDbModel.find();
                if (existing.length) {
                    return existing.map((file_item) => new file_1.default(file_item));
                }
                return null;
            });
        }
        insert(payload) {
            return __awaiter(this, void 0, void 0, function* () {
                const inserted = yield fileDbModel.create(payload);
                if (inserted) {
                    return new file_1.default(inserted);
                }
                return null;
            });
        }
    })();
}
exports.default = makeFileDb;
//# sourceMappingURL=make-file-db.js.map
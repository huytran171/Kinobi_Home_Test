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
exports.makeConnectionString = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function makeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection_string = makeConnectionString();
        const not_connected = mongoose_1.default.connection.readyState === 0;
        not_connected && (yield mongoose_1.default.connect(connection_string));
        console.log("Connected to mongoose.");
        return mongoose_1.default;
    });
}
exports.default = makeDatabase;
function makeConnectionString() {
    const { MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_HOSTNAME, } = process.env;
    return `mongodb+srv://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_INITDB_HOSTNAME}/?retryWrites=true&w=majority`;
}
exports.makeConnectionString = makeConnectionString;
//# sourceMappingURL=make-db.js.map
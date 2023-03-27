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
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
function makeGetAllFilesController({ getAllFiles, }) {
    return function getAllFilesController(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "Content-Type": "application/json",
            };
            try {
                const existing = yield getAllFiles();
                return {
                    headers,
                    statusCode: constants_1.HTTP_STATUS_CODE.OK,
                    body: {
                        data: existing,
                    },
                };
            }
            catch (error) {
                throw {
                    headers,
                    statusCode: constants_1.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
                    body: {
                        data: error.message,
                    },
                };
            }
        });
    };
}
exports.default = makeGetAllFilesController;
//# sourceMappingURL=get-all-files.js.map
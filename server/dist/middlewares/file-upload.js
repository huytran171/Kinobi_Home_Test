"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multer_instance = exports.fileFilter = void 0;
const aws_s3_1 = __importDefault(require("../config/aws-s3"));
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
function fileFilter(req, file, cb) {
    const mimetypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/jpg",
        "image/bmp",
        "image/tiff",
        "image/webp",
    ];
    if (!mimetypes.includes(file.mimetype)) {
        cb(new Error("Invalid file type: " + file.mimetype));
    }
    cb(null, true);
}
exports.fileFilter = fileFilter;
function makeMulterS3FileUpload() {
    const s3 = aws_s3_1.default.getInstance();
    const multer_instance = (0, multer_1.default)({
        storage: (0, multer_s3_1.default)({
            s3,
            acl: "public-read",
            bucket: process.env.S3_BUCKET,
            key: function (req, file, cb) {
                cb(null, Date.now().toString());
            },
        }),
        limits: {
            fileSize: 2e6, //2 MB
        },
        fileFilter,
    });
    return multer_instance;
}
exports.default = makeMulterS3FileUpload;
const multer_instance = makeMulterS3FileUpload();
exports.multer_instance = multer_instance;
//# sourceMappingURL=file-upload.js.map
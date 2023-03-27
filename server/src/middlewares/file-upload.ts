import { Request } from "express";
import AWSS3 from "../config/aws-s3";
import multer from "multer";
import multerS3 from "multer-s3";

export function fileFilter(req: Request, file: any, cb: Function) {
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

export default function makeMulterS3FileUpload() {
  const s3 = AWSS3.getInstance();

  const multer_instance = multer({
    storage: multerS3({
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

const multer_instance = makeMulterS3FileUpload();
export { multer_instance };

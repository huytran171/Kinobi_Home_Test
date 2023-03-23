import AWSS3 from "../config/aws-s3";
import multer from "multer";
import multerS3 from "multer-s3";

export default function makeMulterS3FileUpload() {
  const s3 = AWSS3.getInstance();

  const multer_instance = multer({
    storage: multerS3({
      s3,
      acl: "public-read",
      bucket: process.env.AWS_BUCKET,
      metadata: function (req, file, cb) {
        cb(null, file);
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString());
      },
    }),
  });

  return multer_instance;
}

const multer_instance = makeMulterS3FileUpload();
export { multer_instance };

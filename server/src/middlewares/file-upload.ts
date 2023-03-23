import AWSS3 from "../config/aws-s3";
import multer from "multer";
import multerS3 from "multer-s3";

export default function makeMulterS3FileUpload() {
  const s3 = AWSS3.getS3();

  const upload = multer({
    storage: multerS3({
      s3,
      bucket: process.env.AWS_BUCKET,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString());
      },
    }),
  });

  return upload;
}

const upload = makeMulterS3FileUpload();
export { upload };

import AWS from "aws-sdk";

export default class AWSS3 {
  private static s3: AWS.S3;

  constructor() {
    if (!AWSS3.s3) {
      AWSS3.initial();
    }
  }

  static initial() {
    AWS.config.update({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      region: "ap-southeast-1",
      sslEnabled: true,
      apiVersion: "latest",
      signatureVersion: "v2",
      maxRetries: 5,
    });

    AWSS3.s3 = new AWS.S3();

    console.log("Connected to AWS S3.");
  }

  static getInstance() {
    if (AWSS3.s3) return AWSS3.s3;

    new AWSS3();
    return AWSS3.s3;
  }
}

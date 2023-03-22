import AWS from "aws-sdk";

export default class AWSS3 {
  public static s3: AWS.S3;

  constructor() {
    if (!AWSS3.s3) {
      AWSS3.makeS3();
    }
  }

  static makeS3() {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: "ap-southeast-1",
      sslEnabled: true,
      apiVersion: "latest",
      signatureVersion: "v2",
      maxRetries: 5,
    });

    AWSS3.s3 = new AWS.S3();
  }

  static getS3() {
    return AWSS3.s3;
  }
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var AWSS3 = (function () {
    function AWSS3() {
        if (!AWSS3.s3) {
            AWSS3.initial();
        }
    }
    AWSS3.initial = function () {
        aws_sdk_1.default.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: "ap-southeast-1",
            sslEnabled: true,
            apiVersion: "latest",
            signatureVersion: "v2",
            maxRetries: 5,
        });
        AWSS3.s3 = new aws_sdk_1.default.S3();
        console.log("Connected to AWS S3");
    };
    AWSS3.getInstance = function () {
        if (AWSS3.s3)
            return AWSS3.s3;
        new AWSS3();
        return AWSS3.s3;
    };
    return AWSS3;
}());
exports.default = AWSS3;

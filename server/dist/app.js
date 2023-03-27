"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var aws_s3_1 = __importDefault(require("./config/aws-s3"));
var make_db_1 = __importDefault(require("./data-access/make-db"));
var user_dashboard_1 = __importDefault(require("./routes/user-dashboard"));
var file_upload_1 = require("./middlewares/file-upload");
var express_rate_limit_1 = require("./config/express-rate-limit");
process.env.NODE_ENV === "production" && app.use(express_rate_limit_1.rate_limiter);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(file_upload_1.multer_instance.single("file"));
app.use("/api", user_dashboard_1.default);
app.listen(process.env.APP_PORT, function () {
    return console.log("Server is listening on port ".concat(process.env.APP_PORT));
});
(0, make_db_1.default)()
    .then(function () { return new aws_s3_1.default(); })
    .catch(function (error) {
    console.error(error);
    process.exit(1);
});

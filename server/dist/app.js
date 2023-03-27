"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const aws_s3_1 = __importDefault(require("./config/aws-s3"));
const make_db_1 = __importDefault(require("./data-access/make-db"));
const user_dashboard_1 = __importDefault(require("./routes/user-dashboard"));
const file_upload_1 = require("./middlewares/file-upload");
const express_rate_limit_1 = require("./config/express-rate-limit");
process.env.NODE_ENV === "production" && app.use(express_rate_limit_1.rate_limiter);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(file_upload_1.multer_instance.single("file"));
app.use("/", user_dashboard_1.default);
app.get("/", (_req, res) => {
    return res.send("Express Typescript on Vercel");
});
app.listen(process.env.APP_PORT, () => console.log(`Server is listening on port ${process.env.APP_PORT}.`));
(0, make_db_1.default)()
    .then(() => new aws_s3_1.default())
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=app.js.map
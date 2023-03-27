"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rate_limiter = void 0;
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
function makeExpressRateLimit() {
    var limiter = (0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 100,
        standardHeaders: true,
        legacyHeaders: false,
    });
    return limiter;
}
exports.default = makeExpressRateLimit;
var rate_limiter = makeExpressRateLimit();
exports.rate_limiter = rate_limiter;

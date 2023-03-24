import rateLimit from "express-rate-limit";

export default function makeExpressRateLimit() {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  });

  return limiter;
}

const rate_limiter = makeExpressRateLimit();
export { rate_limiter };

import { Request, Response, NextFunction } from "express";
import ValidatorJS, { Rules } from "validatorjs";
import { HTTP_STATUS_CODE } from "../constants";

export default function makeValidator(rules: Rules) {
  return async function validator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body = req.body;
    const params = req.params;
    const query = req.query;
    const file = req.file;

    const payload = Object.assign({}, body, params, query, { file });

    const validation = new ValidatorJS(payload, rules);

    if (validation.passes()) {
      return next();
    }

    res.set({
      "Content-Type": "application/json",
    });
    res.type("json");
    return res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(validation.errors);
  };
}

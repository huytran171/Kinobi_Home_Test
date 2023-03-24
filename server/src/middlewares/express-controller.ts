import { Request, Response, NextFunction } from "express";

export default function makeExpressController(controller: any) {
  return function expressController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    controller(req)
      .then((response: any) => {
        res.type("json");
        res.status(response.statusCode).send(response.body);
      })
      .catch((error: any) => {
        res.status(error.statusCode).send(error.body);
        next(error);
      });
  };
}

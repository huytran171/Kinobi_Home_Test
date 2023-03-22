import { Request, Response } from "express";

export default function makeExpressController(controller: any) {
  return function expressController(req: Request, res: Response) {
    const httpRequest = {
      file: req.file,
    };

    controller(httpRequest)
      .then(() => console.log("ok done"))
      .catch((error) => console.error(error));
  };
}

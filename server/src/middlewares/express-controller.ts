import { Request, Response } from "express";

export default function makeExpressController(controller: any) {
  return function expressController(req: Request, res: Response) {
    controller(req)
      .then(() => console.log("ok done"))
      .catch((error) => console.error(error));
  };
}

import { NextFunction, Request, Response } from "express";

import { NotFoundError } from "../libs/errors";


export default (req: Request, res: Response, next: NextFunction) => {
  next( new NotFoundError([]) );
};

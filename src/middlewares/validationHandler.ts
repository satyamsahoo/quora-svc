import { validationResult } from "express-validator/check";

import { BadRequestError } from "../libs/errors";
import IError from "../libs/errors/IError";

export default function validationHandler() {
  return (req: any, res: any, next: any) => {
    if (res.locals.isHit) {
      return next();
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(new BadRequestError(errors.array() as IError[]));
    }

    next();
  };
}

import { NextFunction, Request, Response } from "express";
//import jwt_decode, { JwtPayload } from 'jwt-decode'

import { APIError } from "../libs/errors";
import { SuccessResponse } from "../libs/responses";
import { ErrorMessages, StatusCodes } from "../libs/constants";

export default function controllerAdapter(
  controller: any = null,
  functionName: string = ""
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      headers: { authorization },
      params,
      query,
      body
    } = req;
    const { locals } = res;
    let connection;

    try {
      if (locals.isHit) {
        return next();
      }
      //const jwtInfo = jwt_decode<JwtPayload>(authorization);
      const result = await controller[functionName]({
        headers: { authorization },
        params,
        query,
        // tslint:disable-next-line: object-literal-sort-keys
        locals,
        body,
        connection,
        //user: jwtInfo.sub,
      });
      res.locals.isHit = true;
      if (result && result.type === APIError.name) {
        // result is an APIError

        next(result);
      } else {
        let response: any = null;
        if (result.statusCode === 201) {
          delete result.statusCode;
          response = new SuccessResponse(result, { code: StatusCodes.CREATED, message: "", timestamp: new Date() });
        } else {
          response = new SuccessResponse(result);
        }
        res.locals.response = response;
        return res.status(response.metadata.code).json(response);
        // next();
      }
    } catch (error) {
      let err = error;

      const status = err.status || 500;
      if (status === StatusCodes.INTERNAL_SERVER_ERROR) {
        err = { msg: ErrorMessages.INTERNAL_SERVER };
      }
      res.status(status).json(err);
    }
  };
}

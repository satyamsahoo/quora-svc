import {
  BadRequestError,
  DuplicateKeyError,
  NotFoundError,
  UnprocessableError
} from "../libs/errors";
import {
  BadRequestResponse,
  InternalServerErrorResponse,
  NotFoundResponse,
  UnprocessableResponse
} from "../libs/responses";
import IResponse from "../libs/responses/IResponse";
import { EnvVars, StatusCodes } from "../libs/constants";

export default function errorHandler(env: string) {
  return (err: any, req: any, res: any, next: any) => {
    if (env !== EnvVars.TEST) {
    }

    let response: IResponse;
    switch (err.type) {
      case DuplicateKeyError.name:
        response = new UnprocessableResponse(err.data, err.message);
        break;
      case UnprocessableError.name:
        response = new UnprocessableResponse(err.data, err.message);
        break;
      case BadRequestError.name:
        response = new BadRequestResponse(err.data, err.message);
        break;
      case NotFoundError.name:
        response = new NotFoundResponse(err.message);
        break;
      case "entity.parse.failed":
        response = new BadRequestResponse(err.body, "Invalid JSON body");
        break;
      case InternalServerErrorResponse.name:
      default:
        response = new InternalServerErrorResponse(
          err.data,
          err.isPublic ? err.message : StatusCodes[err.status]
        );
        break;
    }

    res.locals.response = response;
    res.locals.outcome = "failed";

    res.status(response.metadata.code).json(response);
  };
}

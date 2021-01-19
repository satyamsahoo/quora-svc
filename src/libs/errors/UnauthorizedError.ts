import { StatusCodes } from "../../libs/constants";
import APIError from "./APIError";
import IError from "./IError";

export default class UnauthorizedError extends APIError {
  constructor(errors: IError[]) {
    super("Validation Error", StatusCodes.BAD_REQUEST, errors, UnauthorizedError.name);
  }
}

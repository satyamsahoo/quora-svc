import { StatusCodes } from "../../libs/constants";
import DBError from "./DBError";
import IError from "./IError";

export default class DuplicateKeyError extends DBError {
  constructor(errors: IError[]) {
    super(errors[0] ? errors[0].msg : "Duplicate key error", StatusCodes.UNPROCESSABLE, errors, DuplicateKeyError.name);
  }
}

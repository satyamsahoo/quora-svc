"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const APIError_1 = require("./APIError");
class BadRequestError extends APIError_1.default {
    constructor(errors) {
        super("Validation Error", constants_1.StatusCodes.BAD_REQUEST, errors, BadRequestError.name);
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map
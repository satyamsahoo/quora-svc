"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const APIError_1 = require("./APIError");
class InternalServerError extends APIError_1.default {
    constructor(errors) {
        super("Internal Server Error", constants_1.StatusCodes.INTERNAL_SERVER_ERROR, errors);
    }
}
exports.default = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const APIError_1 = require("./APIError");
class NotFoundError extends APIError_1.default {
    constructor(errors) {
        super("Page Not found", constants_1.StatusCodes.NOT_FOUND, errors, NotFoundError.name);
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map
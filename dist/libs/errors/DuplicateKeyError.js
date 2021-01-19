"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const DBError_1 = require("./DBError");
class DuplicateKeyError extends DBError_1.default {
    constructor(errors) {
        super(errors[0] ? errors[0].msg : "Duplicate key error", constants_1.StatusCodes.UNPROCESSABLE, errors, DuplicateKeyError.name);
    }
}
exports.default = DuplicateKeyError;
//# sourceMappingURL=DuplicateKeyError.js.map
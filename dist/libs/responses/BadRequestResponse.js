"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class BadRequestResponse {
    constructor(data = null, message = utilities_1.getEnumKeyOrValue(constants_1.StatusCodes, constants_1.StatusCodes.BAD_REQUEST)) {
        this.data = data;
        this.metadata = {
            code: constants_1.StatusCodes.BAD_REQUEST,
            message,
            timestamp: new Date()
        };
    }
}
exports.default = BadRequestResponse;
//# sourceMappingURL=BadRequestResponse.js.map
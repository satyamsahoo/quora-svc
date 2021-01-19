"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class NotFoundResponse {
    constructor(message = utilities_1.getEnumKeyOrValue(constants_1.StatusCodes, constants_1.StatusCodes.NOT_FOUND)) {
        this.data = null;
        this.metadata = {
            code: constants_1.StatusCodes.NOT_FOUND,
            message,
            timestamp: new Date()
        };
    }
}
exports.default = NotFoundResponse;
//# sourceMappingURL=NotFoundResponse.js.map
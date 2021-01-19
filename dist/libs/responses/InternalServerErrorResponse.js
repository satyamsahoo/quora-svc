"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class InternalServerErrorResponse {
    constructor(data = null, message = "") {
        this.data = data;
        this.metadata = {
            code: constants_1.StatusCodes.INTERNAL_SERVER_ERROR,
            message,
            timestamp: new Date()
        };
    }
}
exports.default = InternalServerErrorResponse;
//# sourceMappingURL=InternalServerErrorResponse.js.map
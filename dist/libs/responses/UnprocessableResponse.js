"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class UnprocessableResponse {
    constructor(data = null, message = "") {
        this.data = data;
        this.metadata = {
            code: constants_1.StatusCodes.UNPROCESSABLE,
            message,
            timestamp: new Date()
        };
    }
}
exports.default = UnprocessableResponse;
//# sourceMappingURL=UnprocessableResponse.js.map
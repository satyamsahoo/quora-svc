"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class SuccessResponse {
    constructor(data = null, metadata = { code: constants_1.StatusCodes.OK, message: "", timestamp: new Date() }) {
        this.data = data;
        this.metadata = metadata;
    }
}
exports.default = SuccessResponse;
//# sourceMappingURL=SuccessResponse.js.map
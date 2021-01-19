"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const BaseError_1 = require("./BaseError");
/**
 * Class representing an API error.
 * @extends BaseError
 */
class APIError extends BaseError_1.default {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message, status = constants_1.StatusCodes.INTERNAL_SERVER_ERROR, data = [], type = APIError.name, isPublic = false) {
        super(message, status, data, type, isPublic);
    }
}
exports.default = APIError;
//# sourceMappingURL=APIError.js.map
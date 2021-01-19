"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @extends Error
 */
class BaseError extends Error {
    constructor(message, status, data, type, isPublic) {
        super(message);
        this.message = message;
        this.status = status;
        this.data = data;
        this.type = type;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = BaseError;
//# sourceMappingURL=BaseError.js.map
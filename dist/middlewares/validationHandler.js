"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
const errors_1 = require("../libs/errors");
function validationHandler() {
    return (req, res, next) => {
        if (res.locals.isHit) {
            return next();
        }
        const errors = check_1.validationResult(req);
        if (!errors.isEmpty()) {
            return next(new errors_1.BadRequestError(errors.array()));
        }
        next();
    };
}
exports.default = validationHandler;
//# sourceMappingURL=validationHandler.js.map
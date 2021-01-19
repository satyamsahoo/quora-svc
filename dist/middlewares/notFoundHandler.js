"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../libs/errors");
exports.default = (req, res, next) => {
    next(new errors_1.NotFoundError([]));
};
//# sourceMappingURL=notFoundHandler.js.map
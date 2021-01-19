"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../libs/errors");
const responses_1 = require("../libs/responses");
const constants_1 = require("../libs/constants");
function errorHandler(env) {
    return (err, req, res, next) => {
        if (env !== constants_1.EnvVars.TEST) {
        }
        let response;
        switch (err.type) {
            case errors_1.DuplicateKeyError.name:
                response = new responses_1.UnprocessableResponse(err.data, err.message);
                break;
            case errors_1.UnprocessableError.name:
                response = new responses_1.UnprocessableResponse(err.data, err.message);
                break;
            case errors_1.BadRequestError.name:
                response = new responses_1.BadRequestResponse(err.data, err.message);
                break;
            case errors_1.NotFoundError.name:
                response = new responses_1.NotFoundResponse(err.message);
                break;
            case "entity.parse.failed":
                response = new responses_1.BadRequestResponse(err.body, "Invalid JSON body");
                break;
            case responses_1.InternalServerErrorResponse.name:
            default:
                response = new responses_1.InternalServerErrorResponse(err.data, err.isPublic ? err.message : constants_1.StatusCodes[err.status]);
                break;
        }
        res.locals.response = response;
        res.locals.outcome = "failed";
        res.status(response.metadata.code).json(response);
    };
}
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map
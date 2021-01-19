"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import jwt_decode, { JwtPayload } from 'jwt-decode'
const errors_1 = require("../libs/errors");
const responses_1 = require("../libs/responses");
const constants_1 = require("../libs/constants");
function controllerAdapter(controller = null, functionName = "") {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const { headers: { authorization }, params, query, body } = req;
        const { locals } = res;
        let connection;
        try {
            if (locals.isHit) {
                return next();
            }
            //const jwtInfo = jwt_decode<JwtPayload>(authorization);
            const result = yield controller[functionName]({
                headers: { authorization },
                params,
                query,
                // tslint:disable-next-line: object-literal-sort-keys
                locals,
                body,
                connection,
            });
            res.locals.isHit = true;
            if (result && result.type === errors_1.APIError.name) {
                // result is an APIError
                next(result);
            }
            else {
                let response = null;
                if (result.statusCode === 201) {
                    delete result.statusCode;
                    response = new responses_1.SuccessResponse(result, { code: constants_1.StatusCodes.CREATED, message: "", timestamp: new Date() });
                }
                else {
                    response = new responses_1.SuccessResponse(result);
                }
                res.locals.response = response;
                return res.status(response.metadata.code).json(response);
                // next();
            }
        }
        catch (error) {
            let err = error;
            const status = err.status || 500;
            if (status === constants_1.StatusCodes.INTERNAL_SERVER_ERROR) {
                err = { msg: constants_1.ErrorMessages.INTERNAL_SERVER };
            }
            res.status(status).json(err);
        }
    });
}
exports.default = controllerAdapter;
//# sourceMappingURL=controllerAdapter.js.map
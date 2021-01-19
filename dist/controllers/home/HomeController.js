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
const errors_1 = require("../../libs/errors");
const services_1 = require("../../services");
class HomeController {
    /* tslint:disable: no-null-keyword */
    constructor() {
        this._homeService = new services_1.HomeService();
    }
    static getInstance() {
        if (!HomeController.instance) {
            HomeController.instance = new HomeController();
        }
        return HomeController.instance;
    }
    /**
     * Get home list.
     * @property {number} skip - Number of messages to be skipped.
     * @property {number} limit - Limit number of messages to be returned.
     * @returns {IHome[]}
     */
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { limit, skip } = req.query;
                const result = yield HomeController.getInstance()._homeService.list(limit, skip);
                if (!result.length) {
                    throw new errors_1.NotFoundError([{
                            msg: "Data not found"
                        }]);
                }
                return result;
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Get home.
     * @property {string} id - Number of messages to be skipped.
     * @returns {IHome}
     */
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield HomeController.getInstance()._homeService.get({ id });
                if (!result) {
                    throw new errors_1.NotFoundError([{ msg: 'Data not found' }]);
                }
                return result;
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Create new home
     * @property {string} name - The name of hello world.
     * @returns {IHome}
     */
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const result = yield HomeController.getInstance()._homeService.create({
                    name,
                });
                if (!result) {
                    throw new errors_1.InternalServerError([{ msg: 'Unable to create' }]);
                }
                return result;
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Update the home
     * @param id {string} - The id of the home.
     * @param name {string} -The updated name
     * @returns {IHome}
     */
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name } = req.body;
                const result = yield HomeController.getInstance()._homeService.update({
                    name,
                    originalId: id,
                });
                if (!result) {
                    throw new errors_1.InternalServerError([{ msg: 'Unable to update' }]);
                }
                return result;
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Delete the home
     * @param id {string} The id of the home
     */
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield HomeController.getInstance()._homeService.delete({
                    id,
                });
                if (!result) {
                    throw new errors_1.InternalServerError([{ msg: 'Unable to delete' }]);
                }
                return result;
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = HomeController.getInstance();
//# sourceMappingURL=HomeController.js.map
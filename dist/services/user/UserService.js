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
const repository_1 = require("../../repositories/business/user/repository");
class UserService {
    constructor() {
        this._userRepository = new repository_1.default();
    }
    list(limit, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._userRepository.list({ limit, skip });
        });
    }
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = query;
            return this._userRepository.get({ id });
        });
    }
    create(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, profile_pic } = query;
            return this._userRepository.create({
                name,
                email,
                password,
                profile_pic,
            });
        });
    }
    update(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, profile_pic, originalId } = query;
            return this._userRepository.update({
                name,
                email,
                password,
                profile_pic,
                originalId,
            });
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = query;
            return this._userRepository.delete({
                id,
            });
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map
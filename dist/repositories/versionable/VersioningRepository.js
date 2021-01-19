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
const mongoose = require("mongoose");
class VersioningRepository {
    constructor(modelType) {
        this.modelType = modelType;
    }
    static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    /**
     * Create new application
     * @property {string} body.name - The name of record.
     * @returns {Application}
     */
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = VersioningRepository.generateObjectId();
            const model = new this.modelType(Object.assign(Object.assign({}, options), { _id: id, originalId: id }));
            return yield model.save();
        });
    }
    /**
     * Create new application
     * @property {string} id - Record unique identifier.
     * @returns {Application}
     */
    update(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            const previous = yield this.getById(options.originalId);
            if (previous) {
                yield this.invalidate(options.originalId);
            }
            else {
                // tslint:disable-next-line:no-null-keyword
                return null;
            }
            const newInstance = Object.assign(previous.toJSON(), options);
            newInstance.id = VersioningRepository.generateObjectId();
            delete newInstance.deletedAt;
            const model = new this.modelType(newInstance);
            return yield model.save();
        });
    }
    getAll(query = {}, options = {}) {
        options.limit = options.limit || 0;
        options.skip = options.skip || 0;
        query.deletedAt = undefined;
        // tslint:disable:no-null-keyword
        return this.modelType.find(query, null, options);
    }
    getByQuery(query) {
        return this.modelType.findOne(query);
    }
    getById(id) {
        //return this.modelType.findOne({ originalId: id, deletedAt: null });
    }
    getByIds(ids) {
        return this.getAll({ originalId: { $in: ids } });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getById(id);
            if (result) {
                return yield this.invalidate(id);
            }
            return null;
        });
    }
    invalidate(id) {
        const now = new Date();
        //return this.modelType.update({ originalId: id, deletedAt: null }, { deletedAt: now });
    }
    hardRemove(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelType.remove(query);
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modelType.count({});
        });
    }
}
exports.default = VersioningRepository;
//# sourceMappingURL=VersioningRepository.js.map
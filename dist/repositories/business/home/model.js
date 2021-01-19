"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeModel = exports.homeSchema = void 0;
const mongoose = require("mongoose");
const schema_1 = require("./schema");
exports.homeSchema = new schema_1.default({
    collection: 'Homes',
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
});
/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
exports.homeSchema.pre('save', (next) => {
    // this.updateDate = new Date();
    next();
});
/**
 * Indicies
 */
exports.homeSchema.index({ name: 1 }, { unique: true });
/**
 * Methods
 */
exports.homeSchema.method({});
/**
 * Statics
 */
//homeSchema.statics = {};
/**
 * @typedef Home
 */
exports.homeModel = mongoose.model('Home', exports.homeSchema, 'Homes', true);
//# sourceMappingURL=model.js.map
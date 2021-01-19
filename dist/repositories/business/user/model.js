"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose = require("mongoose");
const schema_1 = require("./schema");
exports.userSchema = new schema_1.default({
    collection: 'Users',
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
exports.userSchema.pre('save', (next) => {
    // this.updateDate = new Date();
    next();
});
/**
 * Indicies
 */
exports.userSchema.index({ email: 1 }, { unique: true });
/**
 * Methods
 */
exports.userSchema.method({});
/**
 * Statics
 */
//homeSchema.statics = {};
/**
 * @typedef Home
 */
exports.userModel = mongoose.model('User', exports.userSchema, 'Users', true);
//# sourceMappingURL=model.js.map
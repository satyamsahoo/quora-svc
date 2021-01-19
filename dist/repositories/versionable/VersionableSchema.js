"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class VersionableSchema extends mongoose.Schema {
    constructor(options, collections) {
        const versionedOptions = Object.assign({
            createdAt: {
                type: Date,
                default: Date.now,
            },
            createdBy: {
                type: String,
                required: true,
            },
            deletedAt: {
                type: Date,
                required: false,
            },
            originalId: {
                type: String,
                required: true,
            },
        }, options);
        super(versionedOptions, collections);
    }
}
exports.default = VersionableSchema;
//# sourceMappingURL=VersionableSchema.js.map
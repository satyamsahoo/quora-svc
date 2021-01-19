"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../../versionable/VersionableSchema");
class UserSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            name: {
                required: true,
                type: String,
            },
            email: {
                required: true,
                type: String,
                unique: true,
            },
            password: {
                required: true,
                type: String,
            },
            profile_pic: {
                required: true,
                type: String,
            }
        };
        super(baseSchema, options);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=schema.js.map
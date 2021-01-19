"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumKeyOrValue = exports.isValidObjectId = void 0;
const mongoose = require("mongoose");
//export const generateObjectId = () =>
//mongoose.Types.ObjectId();
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
exports.isValidObjectId = isValidObjectId;
const getEnumKeyOrValue = (enums, enumKeyOrValue) => enums[enumKeyOrValue];
exports.getEnumKeyOrValue = getEnumKeyOrValue;
//# sourceMappingURL=utilities.js.map
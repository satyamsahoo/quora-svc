"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.config = {
    apiPrefix: process.env.API_PREFIX || "/api",
    // authProvider,
    corsOrigin: process.env.CORS_ORIGIN,
    mongodbConnection: process.env.MONGO_CONNECTION_STRING,
    nodeEnv: process.env.NODE_ENV || "local",
    port: process.env.PORT,
    mongodbTestConnection: process.env.MONGO_TEST_URL,
};
//# sourceMappingURL=config.core.js.map
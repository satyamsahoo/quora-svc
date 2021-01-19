import dotenv = require("dotenv");
dotenv.config();

// import { authProvider } from "./config.local";
import { IConfig } from './IConfig';

export const config: IConfig = {
  apiPrefix: process.env.API_PREFIX || "/api",
  // authProvider,
  corsOrigin: process.env.CORS_ORIGIN,
  mongodbConnection: process.env.MONGO_CONNECTION_STRING,
  nodeEnv: process.env.NODE_ENV || "local",
  port: process.env.PORT,
  mongodbTestConnection: process.env.MONGO_TEST_URL,
};
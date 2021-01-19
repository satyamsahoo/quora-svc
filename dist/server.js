"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const Database_1 = require("./libs/Database");
const cors = require("cors");
const bodyParser = require("body-parser");
const router_1 = require("./router");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    get application() {
        return this.app;
    }
    init() {
        const { authProvider } = this.config;
        this.initCors();
        this.initJsonParser();
        this.setupRoutes();
    }
    run() {
        const { port, nodeEnv, mongodbConnection: mongoUri, mongodbTestConnection } = this.config;
        Database_1.default.open({ mongoUri, testEnv: false }).then(() => {
            this.app.listen(port, () => {
                const message = `|| App is running at port '${port}' in '${nodeEnv}' mode ||`;
                console.log(message);
            }).timeout = 800000;
        });
        return this;
    }
    initCors() {
        this.app.use(cors({
            optionsSuccessStatus: 200,
            // origin: JSON.parse(this.coreConfig.corsOrigin)
            origin: this.config.corsOrigin
            // credentials: true,
        }));
    }
    initJsonParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    setupRoutes() {
        const { apiPrefix } = this.config;
        // mount all routes on /api path
        this.app.use(apiPrefix, router_1.default);
        // catch 404 and forward to error handler
        //this.app.use(notFoundHandler);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map
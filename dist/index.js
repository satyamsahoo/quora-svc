"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_core_1 = require("./config/config.core");
const server_1 = require("./server");
const server = new server_1.Server(Object.assign({}, config_core_1.config));
server.init();
server.run();
//# sourceMappingURL=index.js.map
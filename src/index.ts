import { config } from './config/config.core';
import { Server } from './server';

const server = new Server({ ...config});
server.init();
server.run();
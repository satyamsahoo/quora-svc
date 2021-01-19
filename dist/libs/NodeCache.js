"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeCache {
    constructor() { }
    static getInstance() {
        if (!NodeCache.instance) {
            NodeCache.instance = new Map();
        }
        return NodeCache.instance;
    }
    get(key) {
        return NodeCache.instance.get(key);
    }
    set(key, value) {
        NodeCache.instance.set(key, value);
    }
    delete(key) {
        NodeCache.instance.delete(key);
    }
}
exports.default = NodeCache.getInstance();
//# sourceMappingURL=NodeCache.js.map
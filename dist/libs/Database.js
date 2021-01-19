"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    static open({ mongoUri, testEnv }) {
        return new Promise((resolve, reject) => {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            };
            mongoose.connect(mongoUri, options, (err) => {
                if (err) {
                    return reject(err);
                }
                console.log(`Database is connected at ${mongoUri}`);
                resolve(null);
            });
            mongoose.connection.on('error', () => {
                throw new Error(`unable to connect to database: ${mongoUri}`);
            });
        });
    }
    static close() {
        mongoose.disconnect();
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map
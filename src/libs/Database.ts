import * as mongoose from 'mongoose';

export interface IDatabaseConfig {
    mongoUri: string;
    testEnv: boolean;
}

export default class Database {
    public static open({ mongoUri, testEnv }: IDatabaseConfig) {
        return new Promise((resolve, reject) => {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
            mongoose.connect(mongoUri, options, (err) => {
                if (err) {
                    return reject(err);
                }
                console.log(`Database is connected at ${mongoUri}`)
                resolve(null);
            });

            mongoose.connection.on('error', () => {
                throw new Error(`unable to connect to database: ${mongoUri}`);
            });
        })
    }

    public static close(){
        mongoose.disconnect();
    }
}
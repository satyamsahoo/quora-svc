export interface IConfig {
    mongodbConnection: string;
    nodeEnv: string;
    apiPrefix: string;
    port: string;
    corsOrigin: string;
    mongodbTestConnection: string;
}
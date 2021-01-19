import * as express from "express";
import Database from './libs/Database';
import * as cors from "cors";
import * as bodyParser from "body-parser";
import router from './router';

export class Server {
    private app: express.Express;

    constructor(private config) {
        this.app = express();
    }

    get application() {
        return this.app;
    }

    public init() {
        const { authProvider } = this.config;
        this.initCors();
        this.initJsonParser();
        this.setupRoutes();
    }

    public run() {
        const { port, nodeEnv, mongodbConnection: mongoUri, mongodbTestConnection } = this.config;
        Database.open({ mongoUri, testEnv: false }).then(() => {
            this.app.listen(port, ()=> {
                const message = `|| App is running at port '${port}' in '${nodeEnv}' mode ||`;
                console.log(message);
            }).timeout = 800000;
        })
        return this;
    }

    private initCors() {
        this.app.use(
          cors({
            optionsSuccessStatus: 200,
            // origin: JSON.parse(this.coreConfig.corsOrigin)
            origin: this.config.corsOrigin
            // credentials: true,
          })
        );
    }

    private initJsonParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private setupRoutes() {
        const { apiPrefix } = this.config;
    
        // mount all routes on /api path
        this.app.use(apiPrefix, router);
    
        // catch 404 and forward to error handler
        //this.app.use(notFoundHandler);
    }

      
}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose = require("mongoose");
const sinon = require("sinon");
const supertest = require("supertest");
const config_core_1 = require("../../config/config.core");
const constants_2 = require("./../../libs/constants");
const Server_1 = require("./../../Server");
describe('Home Controller', () => {
    const sandbox = sinon.createSandbox();
    const user = 'test@test.com';
    // @ts-ignore
    const server = new Server_1.Server(config_core_1.config);
    const app = server.init();
    const request = supertest(app);
    let mongoServer;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Opening of DB connection and clearing the Database
        mongoServer = new mongodb_memory_server_1.default();
        const mongoUri = yield mongoServer.getConnectionString();
        yield mongoose.connect(mongoUri, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }));
    afterAll(() => {
        // Closing of DB connection
        mongoose.disconnect();
        mongoServer.stop();
    });
    beforeEach((done) => {
        const mockJWTToken = {
            claims: {
                sub: user,
            },
        };
        const mockJWTTokenPromise = new Promise((resolve, reject) => {
            return resolve(mockJWTToken);
        });
        // const OktaAuthenticationManagerMock = sandbox.mock(
        //   OktaAuthenticationManager.prototype,
        // );
        //   OktaAuthenticationManagerMock.expects('authenticate')
        //     .returns(mockJWTTokenPromise);
        //   const authorization = AuthorizationManager.getInstance();
        //   const mockAuthorizationInstance = sandbox.mock(AuthorizationManager.prototype);
        //   mockAuthorizationInstance.expects('authorize').returns(new Promise((resolve, reject) => {
        //     return resolve(true);
        //   }));
        //   done();
    });
    afterEach((done) => __awaiter(void 0, void 0, void 0, function* () {
        yield sandbox.restore();
        done();
    }));
    describe('Create', () => {
        it('should insert the record', () => __awaiter(void 0, void 0, void 0, function* () {
            return request
                .post(`${constants_2.API_PREFIX}/homes`)
                .send({ name: 'test' })
                .expect('Content-Type', /json/)
                .expect(constants_1.StatusCodes.OK)
                .then((res) => {
                expect(res.body.data.name).toBe('test');
            });
        }));
    });
});
//# sourceMappingURL=HomeController.spec.js.map
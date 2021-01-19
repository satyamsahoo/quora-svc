"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { AuthManager } from 'dan-auth-middleware';
const middlewares_1 = require("../../middlewares");
const express_1 = require("express");
const HomeController_1 = require("./HomeController");
//import { checkSchema } from 'express-validator/check';
const controllerAdapter_1 = require("../../middlewares/controllerAdapter");
// const authManager: AuthManager = AuthManager.getInstance();
// const auth: any = authManager.auth;
const router = express_1.Router();
/**
 * @swagger
 * /homes:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns all Home names
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: true
 *         type: string
 *       - in: query
 *         name: skip
 *         required: true
 *         type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Home
 *         schema:
 *           $ref: '#/definitions/HomeArraySuccess'
 */
router.get('/', 
//checkSchema(validation.list as any),
middlewares_1.validationHandler(), controllerAdapter_1.default(HomeController_1.default, 'list'));
/**
 * @swagger
 * /homes/{id}:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns a Home
 *     parameters:
 *       - name: id
 *         in: path
 *         description: 'Unique id of Home'
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A Home
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.get('/:id', 
//checkSchema(validation.get as any),
middlewares_1.validationHandler(), controllerAdapter_1.default(HomeController_1.default, 'get'));
/**
 * @swagger
 * /homes:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Creates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Home name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/HomePost'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.post('/', 
//checkSchema(validation.create as any),
middlewares_1.validationHandler(), controllerAdapter_1.default(HomeController_1.default, 'create'));
/**
 * @swagger
 * /homes:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Updates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Updated home name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/HomePut'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/')
    .put(
//checkSchema(validation.update as any),
middlewares_1.validationHandler(), HomeController_1.default.update);
/**
 * @swagger
 * /homes/{id}:
 *   delete:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Deletes a Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Original id of the home ie to be deleted
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A Home
 *         schema:
 *           $ref: '#/definitions/DeleteSuccess'
 */
router.route('/:id')
    .delete(
//checkSchema(validation.delete as any),
middlewares_1.validationHandler(), HomeController_1.default.delete);
exports.default = router;
//# sourceMappingURL=route.js.map
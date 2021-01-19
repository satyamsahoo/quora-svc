// import { AuthManager } from 'dan-auth-middleware';
import { validationHandler } from '../../middlewares';
import { Router } from 'express';
import userController from './UserController';
import validation from './validation';
//import { checkSchema } from 'express-validator/check';
import controllerAdapter from '../../middlewares/controllerAdapter';

// const authManager: AuthManager = AuthManager.getInstance();
// const auth: any = authManager.auth;
const router = Router();

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
  validationHandler(),
  controllerAdapter(userController, 'list')
);
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
  validationHandler(),
  controllerAdapter(userController, 'get')
);

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
  validationHandler(),
  controllerAdapter(userController, 'create')
);

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
    validationHandler(),
    userController.update,
  );

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
    validationHandler(),
    userController.delete,
  );
export default router;

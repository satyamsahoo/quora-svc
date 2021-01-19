import { InternalServerError, NotFoundError } from '../../libs/errors';
import IUser from '../../entities/IUser';
import { Nullable } from '../../libs/Nullable';
import { UserService } from '../../services';

class UserController {
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }

    return UserController.instance;
  }
  private static instance: UserController;

  /* tslint:disable: variable-name */
  private _userService: UserService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this._userService = new UserService();
  }

  public async list(req, res, next): Promise<IUser[]> {
    try {
      const { limit, skip } = req.query;
      const result = await UserController.getInstance()._userService.list(limit, skip);
      if (!result.length) {
        throw new NotFoundError([{
          msg: "Data not found"
        }])
      }
      return result;
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Get home.
   * @property {string} id - Number of messages to be skipped.
   * @returns {IHome}
   */
  public async get(req, res, next): Promise<Nullable<IUser>> {
    try {
      const { id } = req.params;
      const result = await UserController.getInstance()._userService.get({ id });
      if (!result) {
        throw new NotFoundError([{ msg: 'Data not found' }]);
      }
      return result;
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Create new home
   * @property {string} name - The name of hello world.
   * @returns {IHome}
   */
  public async create(req, res, next) {
    try {
      const { name } = req.body;
      const result = await UserController.getInstance()._userService.create({
        name,
      });
      if (!result) {
        throw new InternalServerError([{ msg: 'Unable to create' }]);
      }
      return result;
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Update the home
   * @param id {string} - The id of the home.
   * @param name {string} -The updated name
   * @returns {IHome}
   */
  public async update(req, res, next) {
    try {
      const { id, name } = req.body;
      const result = await UserController.getInstance()._userService.update({
        name,
        originalId: id,
      });
      if (!result) {
        throw new InternalServerError([{ msg: 'Unable to update' }]);
      }
      return result;
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Delete the home
   * @param id {string} The id of the home
   */
  public async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await UserController.getInstance()._userService.delete({
        id,
      });
      if (!result) {
        throw new InternalServerError([{ msg: 'Unable to delete' }]);
      }
      return result;
    } catch (err) {
      return next(err);
    }
  }

}

export default UserController.getInstance();

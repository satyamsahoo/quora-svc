import * as mongoose from 'mongoose';
import { Nullable } from '../../../libs/Nullable';
import VersioningRepository from '../../versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryGet, IQueryList, IQueryUpdate } from './entities';
import IUserModel from './IModel';
import { userModel } from './model';

export default class HomeRepository extends VersioningRepository<IUserModel,
  mongoose.Model<IUserModel>> {

  constructor() {
    super(userModel);
  }
  /**
   * Get home list.
   * @property {number} skip - Number of records to be skipped.
   * @property {number} limit - Limit number of records to be returned.
   * @returns {Home[]}
   */
  public async list(options: IQueryList): Promise<IUserModel[]> {


    return super.getAll({}, options);
  }

  /**
   * Get home.
   * @property {string} id - _id of the record
   * @returns {Home}
   */
  public async get(query: IQueryGet): Promise<Nullable<IUserModel>> {

    return super.getById(query.id);
  }

  /**
   * Create new home
   * @property {string} name - The name of record.
   * @returns {Home}
   */
  public async create(options: IQueryCreate): Promise<IUserModel> {
    return super.create(options);
  }

  /**
   * Update new home
   * @property {string} name - The name of record.
   * @returns {Home}
   */
  public async update(options: IQueryUpdate): Promise<IUserModel> {
    return super.update(options);
  }
  /**
   * Delete home
   * @property {string} body.name - The name of record.
   * @returns {Home}
   */
  public async delete(query: IQueryDelete): Promise<IUserModel> {
    return super.remove(query.id);
  }

  /**
   * Hard Delete home
   * @property {string} body.name - The name of record.
   * @returns {Home}
   */
  public async hardDelete(query: IQueryDelete): Promise<IUserModel> {
    return super.hardRemove(query);
  }
}

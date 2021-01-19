import IQueryEntity from './IQueryEntity';
/*tslint:disable:no-empty-interface */
export default interface IQueryBaseCreate extends IQueryEntity {
  createdAt ?: Date,
  createdBy ?: string,
  originalId ?: string,
  deletedAt ?: Date, 
}

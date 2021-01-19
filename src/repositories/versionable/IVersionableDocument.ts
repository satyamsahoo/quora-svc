import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
  createdAt: Date;
  createdBy: string;
  deletedAt ?: Date;
  originalId: string;
}

import * as mongoose from 'mongoose';

import IUserModel from './IModel';
import UserSchema from './schema';

export const userSchema = new UserSchema({
  collection: 'Users',
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
    virtuals: true,
  },
  toObject: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
    virtuals: true,
  },
});

/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
userSchema.pre('save', (next: any) => {
  // this.updateDate = new Date();
  next();
});

/**
 * Indicies
 */
userSchema.index({ email: 1 }, { unique: true });

/**
 * Methods
 */
userSchema.method({});

/**
 * Statics
 */
//homeSchema.statics = {};

/**
 * @typedef Home
 */

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
  (
    'User',
    userSchema,
    'Users',
     true,
  );

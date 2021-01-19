import * as mongoose from 'mongoose';

import IHomeModel from './IModel';
import HomeSchema from './schema';

export const homeSchema = new HomeSchema({
  collection: 'Homes',
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
homeSchema.pre('save', (next: any) => {
  // this.updateDate = new Date();
  next();
});

/**
 * Indicies
 */
homeSchema.index({ name: 1 }, { unique: true });

/**
 * Methods
 */
homeSchema.method({});

/**
 * Statics
 */
//homeSchema.statics = {};

/**
 * @typedef Home
 */

export const homeModel: mongoose.Model<IHomeModel> = mongoose.model<IHomeModel>
  (
    'Home',
    homeSchema,
    'Homes',
     true,
  );

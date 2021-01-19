import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {

  constructor(options: any, collections: any) {
    const versionedOptions = Object.assign({
      createdAt: {
        type: Date,
        default: Date.now,
      },
      createdBy: {
        type: String,
        required: true,
      },
      deletedAt: {
        type: Date,
        required: false,
      },
      originalId: {
        type: String,
        required: true,
      },
    }, options);
    super(versionedOptions, collections);
  }

}

export default VersionableSchema;

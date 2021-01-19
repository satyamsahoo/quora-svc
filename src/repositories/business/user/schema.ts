import VersionableSchema from '../../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
        name: {
            required: true,
            type: String,
        },
        email: {
            required: true,
            type: String,
            unique: true,
        },
        password: {
          required: true,
          type: String,
        },
        profile_pic: {
          required: true,
          type: String,
        }
    };

    super(baseSchema, options);
  }
}

import IEntity from './IEntity';

export default interface IUser extends IEntity {
  name: string;
  email: string;
  password: string;
  profile_pic: string;
}

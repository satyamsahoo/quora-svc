import IUser from '../../entities/IHome';
import { Nullable } from '../../libs/Nullable';
import UserRepository from '../../repositories/business/user/repository';

class UserService {

  // tslint:disable-next-line:variable-name
  private _userRepository: UserRepository;

  public constructor() {
    this._userRepository = new UserRepository();
  }
  public async list(limit: number, skip: number): Promise<IUser[]> {
    return this._userRepository.list({ limit, skip });
  }

  public async get(query): Promise<IUser> {
    const { id } = query;
    return this._userRepository.get({id});
  }

  public async create(query): Promise<IUser> {
    const { name , email, password, profile_pic} = query;
    return this._userRepository.create({
      name,
      email,
      password,
      profile_pic,
    });
  }

  public async update(query): Promise<IUser> {
    const { name , email, password, profile_pic, originalId } = query;
    return this._userRepository.update({
      name,
      email,
      password,
      profile_pic,
      originalId,
    });
  }

  public async delete(query): Promise<IUser> {
    const { id } = query;
    return this._userRepository.delete({
      id,
    });
  }
}

export default UserService;

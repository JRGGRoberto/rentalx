import { User } from '../entities/Users';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
 // findByName(name: string): Promise<User>;
 // list(): Promise<User[]>;
}

export { IUsersRepository }


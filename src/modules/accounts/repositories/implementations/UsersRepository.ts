import { AppError } from "../../../../errors/AppError";
import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }

  async create({
       name, email, password, driver_licence
      }: ICreateUserDTO): Promise<void> {
      const user = this.repository.create({
        name, email, password, driver_licence
      });

      await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }


  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });
    return user;
  }
  
  list(): Promise<User[]> {
    throw new AppError("Method not implemented.");
  }

}

export { UsersRepository }
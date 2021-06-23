import { AppError } from "@errors/AppError";
//import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  //private repository: Repository<User>;
  users: User[] = []; 

  async create({ name, email, password, driver_licence }: ICreateUserDTO): 
  Promise<void> {
     const user = new User();

     Object.assign(user, {
      name, email, password, driver_licence 
     });

     this.users.push(user);

  //constructor(){this.repository = getRepository(User); }

  /*
  async create({
       name, 
       email, 
       password, 
       driver_licence, 
       avatar,
       id
      }: ICreateUserDTO): Promise<void> {
      const user = new User() this.repository.create({
        name, 
        email, 
        password, 
        driver_licence, 
        avatar, 
        id
      });
*/
     // await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email );
    //this.repository.findOne({ email });
    //return user;
  }


  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id );
    //const user = await this.repository.findOne({ id });
    //return user;
  }
  

}

export { UsersRepositoryInMemory }
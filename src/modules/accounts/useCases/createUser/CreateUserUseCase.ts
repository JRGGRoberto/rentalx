import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";


@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ){};

  async execute({
    name, 
    email, 
    password, 
    driver_licence
  }: ICreateUserDTO): Promise<void>{

    const userAlreadExists = await this.userRepository.findByEmail(email);

    if(userAlreadExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name, 
      email, 
      password: passwordHash, 
      driver_licence
    });
  }
}

export { CreateUserUseCase }
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
// import { AppError } from "../../../../errors/AppError"; ante da config  linha 47 tsconfig.json

interface IRequest{
  email: string;
  password: string;
}

interface IResponse{
  user: {
    name: string,
    email: string,
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({ email, password }: IRequest): Promise<IResponse>{

    const user = await this.usersRepository.findByEmail(email);
    if (!user){
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, '722d403f7619c1c277a7c2c8deb4ba40', {
      subject: user.id,
      expiresIn: '1d'
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    };

    return tokenReturn;
  }

}

export {AuthenticateUserUseCase}
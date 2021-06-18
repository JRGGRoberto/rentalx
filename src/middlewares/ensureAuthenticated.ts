import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { SimpleConsoleLogger } from 'typeorm';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction){
  
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new Error("Token missing");
  }
  
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token, 
      '722d403f7619c1c277a7c2c8deb4ba40'
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findByEmail(user_id);
    if (!user){
      throw new Error("User dos not exists!")
    }
    
    next();
  } catch (e) {
    throw new Error("Invalid token!")
  }

  next();
}
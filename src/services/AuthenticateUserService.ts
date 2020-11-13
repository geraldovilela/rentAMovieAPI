import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Users from '../models/UserModels';
import {sign} from 'jsonwebtoken';

interface Request{
  email: string;
  password: string;
}

interface Response {
  user: Users;
  token:string;
}

class AuthenticateUserService{
  public async execute({email, password} : Request): Promise<Response>{
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne({where: {email}});

    if(!user){
      throw new Error('Wrong combination for email/password');
    }

    const passwordCheck = await compare(password, user.password);

    if(!passwordCheck){
      throw new Error('Wrong combination for email/password');
    }

    const token = sign({name: user.name, email: user.email},
                        '3ff9ea655fe629c80872b6ad27973bf0',
                        {subject:user.email, expiresIn:'2h'})

    return {
      user,
      token
    }
  }
}

export default AuthenticateUserService;

import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Users from '../models/UserModels';
import {sign} from 'jsonwebtoken';
import AuthConfig from '../config/auth';

interface Request{
  email: string;
  password: string;
}

interface User {
  id:string;
  name:string;
  email:string;
  password?:string;

}

interface Response {
  user: User;
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

    const {secret, expiresIn} = AuthConfig.jwt;

    const token = sign({name: user.name, email: user.email, id:user.id},
                        secret,
                        {subject:user.id,expiresIn})
      console.log(token);
    return {
      user,
      token
    }
  }
}

export default AuthenticateUserService;

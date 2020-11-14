import { hash } from 'bcryptjs';
import { getCustomRepository, getRepository } from 'typeorm';
import { v4 } from 'uuid';


import UsersRepository from '../repositories/UsersRepository';

interface Request {
  email: string;
  name: string;
  password: string;
}

interface newUser{
  id:string;
  email:string;
  name: string;
  password?:string;
}

class CreateUserService {
  public async execute({ email, name, password }: Request): Promise<newUser> {

      const userRepository = getCustomRepository(UsersRepository);
      const EmailIsAvalid = await userRepository.findOne({where:[{email:email}]});

      if (EmailIsAvalid) {
        throw new Error("Email is already in use.")
      }
      const id = v4();
      const hashedPassword = await hash(password, 10);
      const newUser:newUser = userRepository.create({ id, name, email, password: hashedPassword });
      if(!newUser){
        throw new Error("Error at user creation.")
      }
      await userRepository.save(newUser);

      delete newUser.password;

      return newUser;
  }
}

export default CreateUserService;

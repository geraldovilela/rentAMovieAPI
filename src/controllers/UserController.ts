import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import UsersRepository from '../repositories/UsersRepository';



class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const hashedPassword = await hash(password, 10);

      const userRepository = getCustomRepository(UsersRepository);
      const newUser = userRepository.create({ name, email, password:hashedPassword });


      await userRepository.save(newUser);

      delete newUser.password;

      return response.status(200).json(newUser);
    } catch (error) {
      return response.send(error.message);
    }
  }
}

export default UserController;

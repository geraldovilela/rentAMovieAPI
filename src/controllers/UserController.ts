import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;
      const userService = new CreateUserService()
      const newUser = await userService.execute({ email, name, password });
      return response.status(200).json(newUser);
    } catch (error) {
      return response.send(error.message);
    }
  }
}

export default UserController;

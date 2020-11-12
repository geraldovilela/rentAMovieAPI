import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import MoviesRepository from '../repositories/MoviesRepository';

interface Movies {
  id: string;
  title: string;
  director: string;
}

class MoviesController {
  async create(request: Request, response: Response) {
    try {
      const { title, director } = request.body;
      const moviesRepository = getCustomRepository(MoviesRepository);
      const newMovie = moviesRepository.create({ title, director });

      await moviesRepository.save(newMovie);

      return response.status(200).json(newMovie);
    } catch (error) {
      return response.status(403).send(error.message)
    }
  }

  async find(request: Request, response: Response) {
    try {
      const moviesRepository = getCustomRepository(MoviesRepository);
      const data = await moviesRepository.find();
      return response.json(data);
    } catch (error) {
      return response.status(400).send(error.message)
    }

  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { title, director } = request.body;
      const moviesRepository = getCustomRepository(MoviesRepository);
      const movieData = await moviesRepository.findOneOrFail(id);

      await moviesRepository.update(movieData, { title, director });
      const newMovie = await moviesRepository.findOneOrFail(id);

      return response.status(200).json(newMovie);

    } catch (error) {
      return response.send(error.message);
    }
  }

  async delete (request: Request , response: Response) {
    try {
      const {id} = request.params;
      const moviesRepository = getCustomRepository(MoviesRepository);
      const registerExist = moviesRepository.findOneOrFail(id)
      if(registerExist){
        return response.json('invalid id')
      }
      await moviesRepository.delete(id);
      return response.status(200).json({message: 'sucesss'});
    } catch (error) {
      response.send(error.message)
    }
  }

}


export default MoviesController;

import { getCustomRepository } from 'typeorm';
import { v4 } from 'uuid';


import Movies from '../models/MoviesModel';
import MoviesRepository from '../repositories/MoviesRepository';

interface Movie{
  director:string;
  title: string;
}

class CreateMovieService {
  public async execute({director, title}: Movie) {
    const moviesRepository = getCustomRepository(MoviesRepository);
    const id=v4();
    const newMovie = moviesRepository.create({id,title, director });
    await moviesRepository.save(newMovie);
    return newMovie;
  }
}

export default CreateMovieService;

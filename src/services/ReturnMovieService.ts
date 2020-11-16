import { getCustomRepository, ObjectID } from 'typeorm';
import RentedMovies from '../models/RentModels';
import RentRepository from '../repositories/rentRepository';



interface returnDTO {
  movieId: string;
  returnDay?: Date;
  clientId: string;
}
class ReturnMovieService {
  public async execute({ movieId, clientId }: returnDTO) {
    const rentMovieRepository = getCustomRepository(RentRepository);
    const movie = await rentMovieRepository.findOne({ where: [{ movieId, clientId, returnedFilm: false }] })
    if (!movie) {
      throw new Error(`movie wit ${movieId} was not found in rented movies list.`)
    }
      movie.returnedFilm = true;
      const updatedMovie = await rentMovieRepository.save({id:movie.id, returnedFilm:true},{reload:true});
      return updatedMovie;

  }
}

export default ReturnMovieService;

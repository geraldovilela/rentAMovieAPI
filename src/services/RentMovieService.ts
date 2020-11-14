import { response } from 'express';
import { getCustomRepository } from 'typeorm';
import { v4 } from 'uuid';
import RentRepository from '../repositories/rentRepository';



interface rentDTO {
  movieId:string;
  returnDay:Date;
  clientId:string;
}
class RentMovieService {
  public async execute({movieId, returnDay, clientId}:rentDTO){
    const rentMovieRepository = getCustomRepository(RentRepository);
    const id = v4();
    try{
    const newRent = rentMovieRepository.create({id,movieId, rentDate:returnDay, clientId,returnedFilm:false})
    await rentMovieRepository.save(newRent);
    return newRent;
    } catch (error) {
      throw new Error(error.message)
    }

  }
}

export default RentMovieService;

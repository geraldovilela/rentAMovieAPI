import {Request, Response} from 'express'
import RentMovieService from '../services/RentMovieService';
import ReturnMovieService from '../services/ReturnMovieService';

class RentController {
  async rent(request: Request, response: Response){
    try{

    const rentMovieService = new RentMovieService();
    const {movieId, returnDay} = request.body;
    const {id} = request.user;

    const isRent = await rentMovieService.execute({movieId, returnDay, clientId:id})
    return response.status(200).json(isRent);
    } catch (error) {
      return response.status(400).json({error:error.message})
    }
  }

  async return(request: Request, response: Response){

    const { movieId } = request.body;
    const {id} = request.user;
    const returnMovieService = new ReturnMovieService();
    try{
    const movieReturn = await returnMovieService.execute({movieId, clientId:id});
    return response.status(200).json(movieReturn);
    } catch (error){
      return response.status(400).json({error:error.message})
    }
  }
}

export default RentController;

import {Request, Response} from 'express'
import RentMovieService from '../services/RentMovieService';

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
    return response.send('teste PUT')
  }
}

export default RentController;

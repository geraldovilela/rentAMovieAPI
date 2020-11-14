import {EntityRepository, Repository} from 'typeorm';
import RentedMovies from '../models/RentModels';

@EntityRepository(RentedMovies)
class RentRepository extends Repository<RentedMovies> {

}

export default RentRepository;

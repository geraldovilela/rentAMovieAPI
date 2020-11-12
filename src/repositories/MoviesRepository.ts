import {EntityRepository, Repository} from 'typeorm';
import Movies from '../models/MoviesModel';

@EntityRepository(Movies)
class MoviesRepository extends Repository<Movies> {

}

export default MoviesRepository;

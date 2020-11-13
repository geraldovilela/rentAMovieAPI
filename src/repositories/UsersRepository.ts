import {Entity, EntityRepository, Repository} from 'typeorm';
import Users from '../models/UserModels';

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {

}

export default UsersRepository;

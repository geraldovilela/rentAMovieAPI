import {Column, Entity, ManyToOne, OneToOne, PrimaryColumn} from 'typeorm';
import Users from './UserModels';
import Movies from './MoviesModel';


@Entity('RentedMovies')
class RentedMovies {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  @ManyToOne(()=>Users)
  clientId: string;

  @Column()
  @OneToOne(()=>Movies)
  movieId:string;

  @Column('timestamp')
  rentDate: Date;

  @Column('boolean')
  rentedmovies:boolean;

}

export default RentedMovies;

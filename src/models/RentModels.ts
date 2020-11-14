import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from 'typeorm';
import Users from './UserModels';
import Movies from './MoviesModel';


@Entity('Rentedmovies')
class RentedMovies {
  @PrimaryColumn("uuid")
  id: string;

  @Column("uuid")
  clientId: string;

  @ManyToOne(()=>Users)
  @JoinColumn({name:'clientId'})
  client: Users;

  @Column("uuid")
  movieId:string;

  @OneToOne(()=>Movies)
  @JoinColumn({name:'movieId'})
  movie:Movies;

  @Column('timestamp')
  rentDate: Date;

  @Column('boolean')
  returnedFilm:boolean;

}

export default RentedMovies;

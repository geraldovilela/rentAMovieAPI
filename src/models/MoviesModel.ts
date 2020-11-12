import {Column, Entity, PrimaryColumn} from 'typeorm';


@Entity('Movies')
class Movies {
  @PrimaryColumn("int")
  id: string;

  @Column()
  director: string;

  @Column()
  title: string;

}

export default Movies;

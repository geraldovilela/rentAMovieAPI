import {Column, Entity, PrimaryColumn} from 'typeorm';


@Entity('Movies')
class Movies {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  director: string;

  @Column()
  title: string;

}

export default Movies;

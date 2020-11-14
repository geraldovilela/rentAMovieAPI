import {Column, Entity, PrimaryColumn} from 'typeorm';


@Entity('users')
class Users {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

}

export default Users;

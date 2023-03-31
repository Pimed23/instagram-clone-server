import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity('users')
export default class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  token: string;

  constructor(
    username: string,
    password: string
  ) {
    this.username = username;
    this.password = password;
  }
}


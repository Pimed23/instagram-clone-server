import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity('posts')
export default class Post {
  @ObjectIdColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imageSource: string;

  @Column()
  from: string;

  @Column()
  time: Date;

  constructor(
    title: string,
    imageSource: string,
    from: string,
    time: Date,
  ) {
    this.title = title;
    this.imageSource = imageSource;
    this.from = from;
    this.time = time;
  }
}


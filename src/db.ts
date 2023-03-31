import {DataSource, EntitySchema} from "typeorm";
import dotenv from 'dotenv';
import User from "./entity/User";
import Post from "./entity/Post";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

export default class MongoDB extends DataSource {
  public url: string

  constructor(url: string, dbName: string) {
    super({
      type: "mongodb",
      database: dbName,
      url: url,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true,
      logging: true,
      entities: [
        User,
        Post
      ]
    })
    global.db = this;
  }
}

console.log(MONGODB_URL, DATABASE_NAME);
export const mongo = new MongoDB(MONGODB_URL, DATABASE_NAME);
mongo.initialize()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));
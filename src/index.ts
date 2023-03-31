import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userService from './services/user';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/auth', async (req: Request, res: Response) => {
  // TODO add request body valilidation middleware
  try {
    const {username, password} = req.body;
    const service = await userService.findUser(username, password);
    res.send(service);
  } catch (err) {
    console.error(err);
    res.status(500).json('Something went wrong...')
  } 
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});
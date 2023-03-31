import { Request, Response, Router } from 'express';
import postService from '../services/postService';
import jwt from 'jsonwebtoken';

const userRouter = Router();

const validateToken = (req: Request, res: Response, next) => {
	const accessToken = req.headers['authorization'];
	if(!accessToken) res.send('Access denied');
	jwt.verify(accessToken, process.env.SECRET, (err, usr) => {
		if(err) {
			res.send('Access denied, token expired...');
		} else {
			next();
		}
	});
}

userRouter.post('/post', validateToken, async (req: Request, res: Response, next) => {
  try {
    const {title, imageSource, from} = req.body;
    const post = await postService.addPost(title, imageSource, from);
    res.status(200).json(post);
	} catch (err) {
			console.error(err);
			res.status(404).json('Something went wrong...')
		} 
});

export default userRouter;
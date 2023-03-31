import { Request, Response, Router } from 'express';
import postService from '../services/postService';
import { validateToken } from '../credentials';

const postRouter = Router();

postRouter.get('/post/:name', validateToken, async (req: Request, res: Response, next) => {
	try {
		const {name} = req.params;
		const post = await postService.getAllUserPost(name);
		res.json(post);
	} catch (err) {
		console.error(err);
		res.status(404).json('Something went wrong...')
	}
});

postRouter.get('/post', validateToken, async (req: Request, res: Response, next) => {
	try {
		const post = await postService.getAllPosts();
		res.json(post);
	} catch (err) {
		console.error(err);
		res.status(404).json('Something went wrong...')
	}
});

postRouter.post('/post/create', validateToken, async (req: Request, res: Response, next) => {
  try {
    const {title, imageSource, from} = req.body;
    const post = await postService.addPost(title, imageSource, from);
    res.status(200).json(post);
	} catch (err) {
		console.error(err);
		res.status(404).json('Something went wrong...')
	} 
});

export default postRouter;
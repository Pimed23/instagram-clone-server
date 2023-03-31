import { Request, Response, Router } from 'express';
import userService from '../services/userService';
import jwt from 'jsonwebtoken';

const userRouter = Router();

const generateAccessToken = (user) => {
	return jwt.sign({name: user}, process.env.SECRET, {expiresIn: 60 * 60});
}

userRouter.post('/auth', async (req: Request, res: Response, next) => {
  try {
    const {username, password} = req.body;
    const user = await userService.findUser(username, password);
    const accessToken = generateAccessToken(user.username);
    res.json({userId: user.id, token: accessToken});
  } catch (err) {
    console.error(err);
    res.status(404).json('Something went wrong...')
  } 
});

export default userRouter;
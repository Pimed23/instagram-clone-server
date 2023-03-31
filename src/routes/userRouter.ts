import express, { Request, Response, Router } from 'express';
import userService from '../services/userService';
import jwt from 'jsonwebtoken';

const userRouter = Router();

userRouter.post('/auth', async (req: Request, res: Response, next) => {
  try {
    const {username, password} = req.body;
    const user = await userService.findUser(username, password);
    const accessToken = generateAccessToken(user.username);
    res.json({token: accessToken});
  } catch (err) {
    console.error(err);
    res.status(404).json('Something went wrong...')
  } 
});

const generateAccessToken = (user) => {
	return jwt.sign({name: user}, process.env.SECRET, {expiresIn: 5});
}

export default userRouter;
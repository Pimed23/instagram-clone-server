import express, { Request, Response, Router } from 'express';
import userService from '../services/userService';

const userRouter = Router();

userRouter.post('/auth', async (req: Request, res: Response, next) => {
  try {
    const {username, password} = req.body;
    const user = await userService.findUser(username, password);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(404).json('Something went wrong...')
  } 
});

export default userRouter;
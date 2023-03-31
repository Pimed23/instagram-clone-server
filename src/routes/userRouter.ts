import { Request, response, Response, Router } from 'express';
import userService from '../services/userService';
import { generateAccessToken } from '../credentials';

const userRouter = Router();

userRouter.post('/auth', async (req: Request, res: Response, next) => {
  try {
    const {username, password} = req.body;
    const user = await userService.findUser(username, password);
    const accessToken = generateAccessToken(user.username);
    res.json({userId: user.id, token: accessToken});
  } catch (err) {
    console.error(err);
    res.status(404).json('Something went wrong...');
  } 
});

export default userRouter;
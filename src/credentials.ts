import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const validateToken = (req: Request, res: Response, next) => {
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

export const generateAccessToken = (user: string) => {
	return jwt.sign({name: user}, process.env.SECRET, {expiresIn: 60 * 60});
}

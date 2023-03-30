const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hola mundo');
});

const validateToken = (req, res, next) => {
	const accessToken = req.headers['authorization'];
	if(!accessToken) res.send('Access denied');
	jwt.verify(accessToken, process.env.SECRET, (err, usr) => {
		if(err) {
			res.send('Access denied, token expired...');
		} else {
			next();
		}
	})
}

app.get('/login', validateToken, (req, res) => {
	res.json({
		test: [
			{
				id: 0,
				name: 'Juan'
			},
			{
				id: 1,
				name: 'Daniel'
			}
		] 
	})
});

app.post('/auth', (req, res) => {
	const {username, password} = req.body;
	// Consultar a la DB 
	const user = {username: username}
	const accessToken = generateAccessToken(user);

	res.json({
		message: `Hola ${username}`,
		token: accessToken
	});
});

const generateAccessToken = (user) => {
	return jwt.sign(user, process.env.SECRET, {expiresIn: '5m'});
}
	
app.listen(PORT, () => console.log(`Listen at port ${PORT}...`));
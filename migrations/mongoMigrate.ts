import { mongo } from '../src/db';
import userService from '../src/services/userService';

const initializeDB = async () => {
	await mongo.initialize();
	await clearUsers();
	await initializeUsers();
	mongo.destroy();
}

const initializeUsers = async () => {
	try {
		await userService.addUser('Brian', 'Pinto');
		await userService.addUser('Gabriel', 'Gonza');
		console.log('Database initialize sucessfully');
	} catch (err) {
		console.log('There was an error initializing the users: ', err);
	}
} 

const clearUsers = async () => {
	try {
		await userService.deleteCollection();
		console.log('Clearing the database sucessfully');
	} catch (err) {
		console.log('There was a error clearing the users collection');
	}
}

initializeDB();



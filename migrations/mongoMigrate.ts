import { mongo } from '../src/db';
import userService from '../src/services/userService';
import postService from '../src/services/postService';

const initializeDB = async () => {
	await mongo.initialize();
	await clearUsers();
	await initializeUsers();
	await clearPosts();
	await initializePost();
	console.log('Database initialize sucessfully');
	mongo.destroy();
}

const initializeUsers = async () => {
	try {
		await userService.addUser('Brian', 'Pinto');
		await userService.addUser('Gabriel', 'Gonza');
		await userService.addUser('Diego', 'Portocarrero');
	} catch (err) {
		console.log('There was an error initializing the users: ', err);
	}
} 

const clearUsers = async () => {
	try {
		await userService.deleteCollection();
	} catch (err) {
		console.log('There was a error clearing the users collection');
	}
}

const initializePost = async () => {
	try {
		await postService.addPost('image1', 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg', 'Brian');
		await postService.addPost('image2', 'https://openseauserdata.com/files/7aa61edcd25d1b512e512044a8b3cb15.png', 'Brian');

		await postService.addPost('image3', 'https://www.thestreet.com/.image/t_share/MTgyMDU5NDcwMTc4NzU1NzE1/boredape1.jpg', 'Gabriel');
		await postService.addPost('image4', 'https://images.wsj.net/im-491396?width=700&height=700', 'Gabriel');

		await postService.addPost('image5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbASb01ZpcFvzhcV4eUP59yeHNP-3lsrvYNA&usqp=CAU', 'Diego');
		await postService.addPost('image6', 'https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg', 'Diego');
	} catch (err) {
		console.log('There was a error initializing the posts');
	}
}

const clearPosts = async () => {
	try {
		await postService.deleteCollection();
	} catch (err) {
		console.log('There was a error clearing the users collection');
	}
}

initializeDB();



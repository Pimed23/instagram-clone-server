import {mongo} from '../db';
import Post from '../entity/Post';

class PostService {
    // async findUser(username: string, password: string) {
    //     const userRepo = mongo.getRepository(Post);
    //     return userRepo.findOne({where: {username: username, password: password}}); 
    // }

    async addPost(title: string, imageSource: string, from: string) {
        const postRepo = mongo.getRepository(Post);
        return postRepo.save(new Post(title, imageSource, from, new Date()));
    }

    async deleteCollection() {
        const postRepo = mongo.getRepository(Post);
        return postRepo.clear();
    }
}

export default new PostService();
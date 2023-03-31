import {mongo} from '../db';
import Post from '../entity/Post';

class PostService {
    async getAllUserPost(userId: string) {
        const userRepo = mongo.getRepository(Post);
        return userRepo.find({where: {from: userId}}); 
    }

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
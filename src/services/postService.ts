import {mongo} from '../db';
import Post from '../entity/Post';

class PostService {
    async getAllUserPost(name: string) {
        const postRepo = mongo.getRepository(Post);
        return postRepo.find({where: {from: name}}); 
    }

    async getAllPosts() {
        const postRepo = mongo.getRepository(Post);
        return postRepo.find();
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
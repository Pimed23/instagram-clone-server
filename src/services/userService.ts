import {mongo} from '../db';
import User from '../entity/User';

class UserService {
    async findUser(username: string, password: string) {
        const userRepo = mongo.getRepository(User);
        return userRepo.findOne({where: {username: username, password: password}}); 
    }

    async addUser(username: string, password: string) {
        const userRepo = mongo.getRepository(User);
        return userRepo.save(new User(username, password));
    }

    async deleteCollection() {
        const userRepo = mongo.getRepository(User);
        return userRepo.clear();
    }
}

export default new UserService();
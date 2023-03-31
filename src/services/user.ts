import {mongo} from '../db';
import User from '../entity/User';

class UserService {
    async findUser(username: string, password: string) {
        const userRepo = mongo.getRepository(User);
        
        userRepo.find({where: {username: username, password: password}}); 
    }
}

export default new UserService();
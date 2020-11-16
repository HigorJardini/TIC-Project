import Users from '../models/User';
import { Op } from 'sequelize';

class UsersRepository {

    async findOne(id) {

        const user = await 
                        Users.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return user; 

    }

    async create(req) {

        const user = await Users.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return user;

    }

    async update(id, req) {

        const user = await Users.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return user;

    }

    async destroy(id) {
        
        const reply = await 
                            Users.destroy({ where: { id: id }})
                                .then(success => {
                                    if(success === 1)
                                        return true;  
                                    else 
                                        return false;
                                })
                                .catch(error => {
                                    return error;
                                });

        return reply;

    }

}

export default new UsersRepository();

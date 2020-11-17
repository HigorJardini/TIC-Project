import Roles from '../models/Roles';
import { Op } from 'sequelize';

class RolesRepository {

    async index(id) {

        const role = await 
                        Roles.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return role; 

    }

    async create(req) {

        const role = await Roles.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return role;

    }

    async update(id, req) {

        const role = await Roles.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return role;

    }

    async destroy(id) {
        
        const reply = await 
                            Roles.destroy({ where: { id: id }})
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

export default new RolesRepository();

import Pets from '../models/Pets';
import { Op } from 'sequelize';

class PetsRepository {

    async index(id) {

        const pet = await 
                        Pets.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return pet; 

    }

    async create(req) {

        const pet = await Pets.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return pet;

    }

    async update(id, req) {

        const pet = await Pets.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return pet;

    }

    async destroy(id) {
        
        const reply = await 
                            Pets.destroy({ where: { id: id }})
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

export default new PetsRepository();

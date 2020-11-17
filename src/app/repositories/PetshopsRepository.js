import Petshops from '../models/Petshops';
import { Op } from 'sequelize';

class PetshopsRepository {

    async index(id) {

        const petshop = await 
                        Petshops.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return petshop; 

    }

    async create(req) {

        const petshop = await Petshops.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return petshop;

    }

    async update(id, req) {

        const petshop = await Petshops.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return petshop;

    }

    async destroy(id) {
        
        const reply = await 
                            Petshops.destroy({ where: { id: id }})
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

export default new PetshopsRepository();

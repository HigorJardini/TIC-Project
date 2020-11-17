import Breeds from '../models/Breeds';
import { Op } from 'sequelize';

class BreedsRepository {

    async index(id) {

        const breeds = await 
                        Breeds.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return breeds; 

    }

    async create(req) {

        const breeds = await Breeds.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return breeds;

    }

    async update(id, req) {

        const breeds = await Breeds.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return breeds;

    }

    async destroy(id) {
        
        const reply = await 
                            Breeds.destroy({ where: { id: id }})
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

export default new BreedsRepository();

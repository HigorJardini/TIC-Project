import Phones from '../models/Phones';
import { Op } from 'sequelize';

class PhonesRepository {

    async index(id) {

        const phone = await 
                        Phones.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return phone; 

    }

    async create(req) {

        const phone = await Phones.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return phone;

    }

    async update(id, req) {

        const phone = await Phones.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return phone;

    }

    async destroy(id) {
        
        const reply = await 
                            Phones.destroy({ where: { id: id }})
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

export default new PhonesRepository();

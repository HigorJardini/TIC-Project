import Address from '../models/Address';
import { Op } from 'sequelize';

class AddressService {

    async index(id) {

        const address = await 
                        Address.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return address; 

    }

    async create(req) {

        const address = await Address.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return address;

    }

    async update(id, req) {

        const address = await Address.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return address;

    }

    async destroy(id) {
        
        const reply = await 
                            Address.destroy({ where: { id: id }})
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

export default new AddressService();

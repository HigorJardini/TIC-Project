import PetshopsAdministration from '../models/PetshopsAdministration';
import { Op } from 'sequelize';

class AdminsitrationRepository {

    async index(id) {

        const administration = await 
                        PetshopsAdministration.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return administration; 

    }

    async create(req) {

        const administration = await PetshopsAdministration.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return administration;

    }

    async update(id, req) {

        const administration = await PetshopsAdministration.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return administration;

    }

    async destroy(id) {
        
        const reply = await 
                            PetshopsAdministration.destroy({ where: { id: id }})
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

export default new AdminsitrationRepository();

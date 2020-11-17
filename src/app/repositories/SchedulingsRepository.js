import Schedulings from '../models/Schedulings';
import { Op } from 'sequelize';

class SchedulingsRepository {

    async index(id) {

        const scheduling = await 
                        Schedulings.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return scheduling; 

    }

    async create(req) {

        const scheduling = await Schedulings.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return scheduling;

    }

    async update(id, req) {

        const scheduling = await Schedulings.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return scheduling;

    }

    async destroy(id) {
        
        const reply = await 
                            Schedulings.destroy({ where: { id: id }})
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

export default new SchedulingsRepository();

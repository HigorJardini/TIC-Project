import Cities from '../models/Cities';
import { Op } from 'sequelize';

class CitiesRepository {

    async index(id) {

        const cities = await 
                        Cities.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return cities; 

    }

    async create(req) {

        const cities = await Cities.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return cities;

    }

    async update(id, req) {

        const cities = await Cities.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return cities;

    }

    async destroy(id) {
        
        const reply = await 
                            Cities.destroy({ where: { id: id }})
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

export default new CitiesRepository();

import Ufs from '../models/Ufs';
import { Op } from 'sequelize';

class UfsRepository{

    async index(id) {

        const ufs = await 
                        Ufs.findOne({ where: { id: id }})
                            .then(success => {
                                return success;
                            })
                            .catch(error => {
                                return false;
                            });

        return ufs; 

    }

    async create(req) {

        const ufs = await Ufs.create(req)
                                .then(success => {
                                    return success;
                                })
                                .catch(error => {
                                    return error;
                                });

        return ufs;

    }

    async update(id, req) {

        const ufs = await Ufs.update({
            ...req
        },
        { 
            where: { id: id } 
        }
        );  

        return ufs;

    }

    async destroy(id) {
        
        const reply = await 
                            Ufs.destroy({ where: { id: id }})
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

export default new UfsRepository();

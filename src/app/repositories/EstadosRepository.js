import Estados from '../models/Estados';
import Cidades from '../models/Cidades';

class EstadosRepository {

    async findOne(id) {

        const estado = await 
                            Estados.findOne({ where: { id: id }})
                                    .then(success => {
                                        return success;
                                    })
                                    .catch(error => {
                                        return false;
                                    });

        return estado; 

    }

    async create(req) {

        const {id}= await Estados.create(req);

        return {
                message:"Estado criado com sucesso", 
                boolean: true,
                id
        }

    }

    async destroy(id) {
        
        const reply = await 
                        Estados.destroy({ where: { id: id }})
                                .then(success => {
                                    if(success === 1){
                                        return true;  
                                    }     
                                    else {
                                        return false;
                                    }
                                })
                                .catch(error => {

                                    return error;

                                });

        return reply;

    }

    async update_uf(cod,id){
        const servico = await 
                            Estados.findOne({ where: { id: cod}
                                     })
                                     .then(success => {
                                        Cidades.update({uf: success.id}, { where: { uf: id}});
                                         return success;
                                     })
                                     .catch(error => {
                                         return error;
                                     });

        return servico;
    }
    

}

export default new EstadosRepository();

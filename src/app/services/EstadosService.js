import EstadosRepository from '../repositories/EstadosRepository';

class EstadosServicos {

    async create(req) {
        
        const create = await EstadosRepository.create(req.body)
                                            .then(success => {

                                                return success;

                                            })
                                            .catch(error => {

                                                return {

                                                    message:"Ocorreu um erro",
                                                    boolean: false

                                                }

                                            });

        return create;
    
    }

    async update(req) {

        const update = await EstadosRepository.findOne(req.body.id)
                        .then(async success => {
                            if(!success === false){
                                
                                const create = {
                                    uf: req.body.uf,
                                    estado: req.body.estado,
                                    cep_inicial: req.body.cep_inicial,
                                    cep_final: req.body.cep_final
                                }

                                const estado_create = await EstadosRepository.create(create);

                                await EstadosRepository.destroy(success.id);

                                await EstadosRepository.update_uf(estado_create.id,req.body.id)

                                return {
                                    message:"Estado atualizado",
                                    boolean: true
                                }

                            } else {

                                return {
                                            message:"Estado não encontrado",
                                            boolean: false
                                        }
                        
                            }
                        })
                        .catch( error => {

                            return {
                                message:"Ocorreu um errro",
                                boolean: false
                            }

                        });

        return update;

    }

    async destroy(req) {
        
        const destroy = await EstadosRepository.destroy(req.body.id)
                    .then(success => {
                        if(success === true){

                            return {
                                        message:"Estado deletado com sucesso", 
                                        boolean: true
                                    }

                        } else {

                            return {
                                        message:"Estado não encontrado",
                                        boolean: false
                                    }
                    
                        }
        });

        return destroy;
    
    }

}

export default new EstadosServicos();

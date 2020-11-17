import UfsRepository from '../repositories/UfsRepository';

class UfsService {

    async index(req) {

        const create = await UfsRepository
                                    .FindOne(req.body)
                                        .then(success => {

                                            if (!success === false) {

                                                return {
                                                    message:"UF criado com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar o UF",
                                                            boolean: false,
                                                        }
                                        
                                            }

                                        });

        return index;
    
    }

    async create(req) {

        const create = await UfsRepository
                                    .create(req.body)
                                        .then(success => {

                                            if (!success === false) {

                                                return {
                                                    message:"UF criado com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar o UF",
                                                            boolean: false,
                                                        }
                                        
                                            }

                                        });

        return create;
    
    }

    async update(req) {

        const update = await UfsRepository.findOne(req.params.id, req)
                        .then(async success => {
                            if (!success === false) {
                                
                                return {
                                    message : 'UF atualizado com sucesso',
                                    boolean:  true
                                }

                            } else {

                                return {
                                            message : 'UF não encontrado',
                                            boolean : false
                                        }
                        
                            }
        });

        return update;

    }

    async destroy(req) {
        
        const destroy = await UfsRepository
                            .destroy(req.params.id)
                                .then(success => {
                                    if (success === true) {

                                        return {
                                                    message:"UF deletado com sucesso", 
                                                    boolean: true
                                                }

                                    } else {

                                        return {
                                                    message:"UF não encontrado",
                                                    boolean: false
                                                }
                                
                                    }
        });

        return destroy;
    
    }

}

export default new UfsService();

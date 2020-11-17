import PetshopsRepository from '../repositories/PetshopsRepository';

class PetshopsService {

    async index(req) {

        const index = await UsersRepository
                                    .FindOne(req.body)
                                        .then(success => {

                                            if (!success === false) {

                                                return {
                                                    message:"Telefone criado com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar o Telefone",
                                                            boolean: false,
                                                        }
                                        
                                            }

                                        });

        return index;
    
    }

    async create(req) {

        const create = await UsersRepository
                                    .create(req.body)
                                        .then(success => {

                                            if (!success === false) {

                                                return {
                                                    message:"Petshop criado com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar o Petshop",
                                                            boolean: false,
                                                        }
                                        
                                            }

                                        });

        return create;
    
    }

    async update(req) {

        const update = await UsersRepository.findOne(req.params.id, req)
                        .then(async success => {
                            if (!success === false) {
                                
                                return {
                                    message : 'Petshop atualizado com sucesso',
                                    boolean:  true
                                }

                            } else {

                                return {
                                            message : 'Petshop não encontrado',
                                            boolean : false
                                        }
                        
                            }
        });

        return update;

    }

    async destroy(req) {
        
        const destroy = await UsersRepository
                            .destroy(req.params.id)
                                .then(success => {
                                    if (success === true) {

                                        return {
                                                    message:"Petshop deletado com sucesso", 
                                                    boolean: true
                                                }

                                    } else {

                                        return {
                                                    message:"Petshop não encontrado",
                                                    boolean: false
                                                }
                                
                                    }
        });

        return destroy;
    
    }

}

export default new PetshopsService();

import UsersRepository from '../repositories/UsersRepository';

class UsersService {

    async create(req) {

        const create = await UsersRepository
                                    .create(req.body)
                                        .then(success => {

                                            if (!success === false) {

                                                return {
                                                    message:"Usuário criado com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar o usuário",
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
                                    message : 'Usuário atualizado com sucesso',
                                    boolean:  true
                                }

                            } else {

                                return {
                                            message : 'Usuário não encontrado',
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
                                                    message:"Usuário deletado com sucesso", 
                                                    boolean: true
                                                }

                                    } else {

                                        return {
                                                    message:"Usuário não encontrado",
                                                    boolean: false
                                                }
                                
                                    }
        });

        return destroy;
    
    }

}

export default new UsersService();

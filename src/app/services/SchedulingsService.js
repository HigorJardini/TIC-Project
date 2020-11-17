import UsersRepository from '../repositories/UsersRepository';

class SchedulingsService {

    async index(req) {

        const create = await UsersRepository
                                    .FindOne(req.body)
                                        .then(success => {

                                            if (!success === false) {

                                                return {
                                                    message:"Agendamento criado com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar o Agendamento",
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
                                                    message:"Agendamento criado com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar o Agendamento",
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
                                    message : 'Agendamento atualizado com sucesso',
                                    boolean:  true
                                }

                            } else {

                                return {
                                            message : 'Agendamento não encontrado',
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
                                                    message:"Agendamento deletado com sucesso", 
                                                    boolean: true
                                                }

                                    } else {

                                        return {
                                                    message:"Agendamento não encontrado",
                                                    boolean: false
                                                }
                                
                                    }
        });

        return destroy;
    
    }

}

export default new SchedulingsService();

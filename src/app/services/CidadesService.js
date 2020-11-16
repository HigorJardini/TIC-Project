import CidadesRepository from '../repositories/CidadesRepository';

class CidadesService {

    async create(req) {

        const create = await CidadesRepository
                                    .create(req.body)
                                        .then(success => {

                                            if(!success === false){
                
                                                return {
                                                    message:"Cidade criada com sucesso", 
                                                    boolean: true,
                                                    success
                                                }
                
                                            } else {
                
                                                return {
                                                            message:"Não foi possivel criar a cidade",
                                                            boolean: false,
                                                        }
                                        
                                            }

                                        });

        return create;
    
    }

    async update(req) {

        const update = await CidadesRepository.findOne(req.body.id)
                        .then(async success => {
                            if(!success === false){
                                
                                const create = {
                                    dr: req.body.dr,
                                    localidade: req.body.localidade,
                                    cep_inicial: req.body.cep_inicial,
                                    cep_final: req.body.cep_final,
                                    user_id: req.body.user_id,
                                    uf: req.body.uf,
                                    cod_precificacao: req.body.cod_precificacao,
                                }

                                await CidadesRepository.create(create);

                                await CidadesRepository.destroy(success.id);

                                return {
                                    message:"Cidade atualizada",
                                    boolean: true
                                }

                            } else {

                                return {
                                            message:"Cidade não encontrada",
                                            boolean: false
                                        }
                        
                            }
        });

        return update;

    }

    async destroy(req) {
        
        const destroy = await CidadesRepository
                            .destroy(req.body.id)
                                .then(success => {
                                    if(success === true){

                                        return {
                                                    message:"Cidade deletada com sucesso", 
                                                    boolean: true
                                                }

                                    } else {

                                        return {
                                                    message:"Cidade não encontrada",
                                                    boolean: false
                                                }
                                
                                    }
        });

        return destroy;
    
    }

}

export default new CidadesService();

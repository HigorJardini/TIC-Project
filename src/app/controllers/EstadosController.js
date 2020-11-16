import EstadosService from '../services/EstadosService';

class EstadosController {

    async create(req, res) {

        const create = await EstadosService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await EstadosService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await EstadosService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new EstadosController();
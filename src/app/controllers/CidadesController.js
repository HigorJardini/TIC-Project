import CidadesService from '../services/CidadesService';

class CidadesController {

    async create(req, res) {

        const create = await CidadesService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await CidadesService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await CidadesService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new CidadesController();

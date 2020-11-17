import PetsService from '../services/PetsService';

class PetsController {

    async index(req, res) {

        const index = await PetsService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await PetsService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await PetsService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await PetsService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new PetsController();
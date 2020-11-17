import BreedsService from '../services/BreedsService';

class BreedsController {

    async index(req, res) {

        const index = await BreedsService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await BreedsService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await BreedsService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await BreedsService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new BreedsController();
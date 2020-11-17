import PhonesService from '../services/PhonesService';

class PhonesController {

    async index(req, res) {

        const index = await PhonesService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await PhonesService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await PhonesService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await PhonesService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new PhonesController();
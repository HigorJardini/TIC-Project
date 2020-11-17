import SchedulingsService from '../services/SchedulingsService';

class SchedulingsController {

    async index(req, res) {

        const index = await SchedulingsService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await SchedulingsService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await SchedulingsService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await SchedulingsService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new SchedulingsController();
import CitiesService from '../services/CitiesService';

class CitiesController {

    async index(req, res) {

        const index = await CitiesService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await CitiesService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await CitiesService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await CitiesService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new CitiesController();
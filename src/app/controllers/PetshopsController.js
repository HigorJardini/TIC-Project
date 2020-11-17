import PetshopsService from '../services/PetshopsService';

class PetshopsController {

    async index(req, res) {

        const index = await PetshopsService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await PetshopsService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await PetshopsService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await PetshopsService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new PetshopsController();
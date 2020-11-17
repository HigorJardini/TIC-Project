import RolesService from '../services/RolesService';

class RolesController {

    async index(req, res) {

        const index = await RolesService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await RolesService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await RolesService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await RolesService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new RolesController();
import AdminsitrationService from '../services/AdminsitrationService';

class AdminsitrationController {

    async index(req, res) {

        const index = await AdminsitrationService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await AdminsitrationService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await AdminsitrationService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await AdminsitrationService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new AdminsitrationController();
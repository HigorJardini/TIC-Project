import UfsService from '../services/UfsService';

class UfsController {

    async index(req, res) {

        const index = await UfsService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await UfsService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await UfsService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await UfsService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new UfsController();
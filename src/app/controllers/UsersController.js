import UsersService from '../services/UsersService';

class UsersController {

    async index(req, res) {

        const index = await UsersService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await UsersService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await UsersService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await UsersService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new UsersController();
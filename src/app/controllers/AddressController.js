import AddressService from '../services/AddressService';

class AddressController {

    async index(req, res) {

        const index = await AddressService.index(req);

        return res.json({
            index
        });

    }

    async create(req, res) {

        const create = await AddressService.create(req);

        return res.json({
            create
        });

    }

    async update(req, res) {

        const update = await AddressService.update(req);

        return res.json({
            update
        });

    }

    async destroy(req, res) {

        const destroy = await AddressService.destroy(req);

        return res.json({
            destroy
        });

    }

}

export default new AddressController();
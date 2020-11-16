import Sequelize, { Model } from 'sequelize';

class tb_petshops extends Model {
	static init(sequelize) {
		super.init(
		{
			uf     : Sequelize.STRING,
			estado : Sequelize.STRING,
		},
		{
			sequelize,
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
		);

		return this;
	}

}

export default tb_petshops;

import Sequelize, { Model } from 'sequelize';

class tb_ufs extends Model {
	static init(sequelize) {
		super.init(
		{
			uf 	 : Sequelize.STRING(3),
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

export default tb_ufs;

import Sequelize, { Model } from 'sequelize';

class tb_pets extends Model {
	static init(sequelize) {
		super.init(
		{
			name                 : Sequelize.STRING,
			birthday             : Sequelize.DATE,
			gender               : Sequelize.BOOLEAN,
			description_health   : Sequelize.JSON,
			description_behavior : Sequelize.JSON,
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

export default tb_pets;

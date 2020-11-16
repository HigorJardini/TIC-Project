import Sequelize, { Model } from 'sequelize';

class tb_users extends Model {
	static init(sequelize) {
		super.init(
		{
			name     : Sequelize.STRING,
			email    : Sequelize.STRING,
			password : Sequelize.STRING,
			birthday : Sequelize.DATE,
			gender   : Sequelize.BOOLEAN,
			status   : Sequelize.BOOLEAN
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

export default tb_users;

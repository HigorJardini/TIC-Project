import Sequelize, { Model } from 'sequelize';

class tb_breeds extends Model {
	static init(sequelize) {
		super.init(
		{
			name : Sequelize.INTEGER
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

export default tb_breeds;

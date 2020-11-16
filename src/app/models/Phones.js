import Sequelize, { Model } from 'sequelize';

class tb_phones extends Model {
	static init(sequelize) {
		super.init(
		{
			number : Sequelize.INTEGER
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

export default tb_phones;

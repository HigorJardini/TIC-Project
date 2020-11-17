import Sequelize, { Model } from 'sequelize';

class tb_roles extends Model {
	static init(sequelize) {
		super.init(
			{
				role        : Sequelize.STRING,
				description : Sequelize.STRING
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

	static associate(models){

		this.belongsTo(models.tb_roles, { through: tb_roles });

	}

}

export default tb_roles;

import Sequelize, { Model } from 'sequelize';

class tb_petshops_administration extends Model {
	static init(sequelize) {
		super.init(
			{
	// COLOCAR O RESTO DA COISA
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

		this.belongsTo(models.tb_roles, { foreignKey: 'id', as: 'roles' });

	}

}

export default tb_petshops_administration;

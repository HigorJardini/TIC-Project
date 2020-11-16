import Sequelize, { Model } from 'sequelize';

class tb_cidades extends Model {
	static init(sequelize) {
		super.init(
		{
			dr               : Sequelize.STRING,
			localidade       : Sequelize.STRING,
			cep_inicial      : Sequelize.INTEGER,
			cep_final        : Sequelize.INTEGER,
			cod_precificacao : Sequelize.STRING,
			user_id          : {
				type: Sequelize.STRING,
				defaultValue: 0
			}
		},
		{
			sequelize,
		}
		);

		return this;
	}

	static associate(models){

		this.belongsTo(models.tb_estados, { foreignKey: 'uf', as: 'estados' });

	}

}

export default tb_cidades;

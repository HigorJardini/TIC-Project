import Sequelize, { Model } from 'sequelize';

class tb_estados extends Model {
	static init(sequelize) {
		super.init(
		{
			uf          : Sequelize.STRING,
			estado      : Sequelize.STRING,
			cep_inicial : Sequelize.INTEGER,
			cep_final   : Sequelize.INTEGER,
		},
		{
			sequelize,
		}
		);

		return this;
	}

}

export default tb_estados;

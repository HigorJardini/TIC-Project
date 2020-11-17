import Sequelize, { Model } from 'sequelize';

class tb_cities extends Model {
	static init(sequelize) {
		super.init(
		{
			id_uf 	   	 : Sequelize.BIGINT,
			id_petshop 	 : Sequelize.BIGINT,
			postcode   	 : Sequelize.INTEGER,
			number 	   	 : Sequelize.STRING,
			complement 	 : Sequelize.STRING,
			street 	   	 : Sequelize.STRING,
			neighborhood : Sequelize.STRING
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

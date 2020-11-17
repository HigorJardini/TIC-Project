import Sequelize, { Model } from 'sequelize';

class tb_adress extends Model {
	static init(sequelize) {
		super.init(
		{
			id_user 	 : Sequelize.BIGINT,
			id_petshop   : Sequelize.BIGINT,
			id_city 	 : Sequelize.BIGINT,
			postcode 	 : Sequelize.INTEGER,
			number		 : Sequelize.STRING,
			complement   : Sequelize.STRING,
			street 		 : Sequelize.STRING,
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

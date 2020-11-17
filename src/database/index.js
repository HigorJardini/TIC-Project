import Sequelize from 'sequelize';

import Address 					from '../app/models/Address';
import Breeds  					from '../app/models/Breeds';
import Cities 					from '../app/models/Cities';
import Pets 					from '../app/models/Pets';
import Petshops 				from '../app/models/Petshops';
import PetshopsAdministration 	from '../app/models/PetshopsAdministration';
import Phones 					from '../app/models/Phones';
import Roles 					from '../app/models/Roles';
import Schedulings 				from '../app/models/Schedulings';
import Ufs 						from '../app/models/Ufs';
import Users 					from '../app/models/Users';

import databaseConfig from '../config/database';

const models = [
				Address,
				Breeds,
				Cities,
				Pets,
				Petshops,
				PetshopsAdministration,
				Phones,
				Roles,
				Schedulings,
				Ufs,
				Users
			];

class Database {

	constructor() {
		this.init();
	}

	init() {

		this.connection = new Sequelize(databaseConfig);

		models
				.map(model => model.init(this.connection))
				.map(model => model.associate && model.associate(this.connection.models));

	}

}

export default new Database();

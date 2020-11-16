import Sequelize from 'sequelize';

import LogCorreiosModel from '../app/models/LogCorreios';
import Precificacao from '../app/models/Precificacao';
import Estados from '../app/models/Estados';
import Cidades from '../app/models/Cidades';
import Servicos from '../app/models/Servicos';

import databaseConfig from '../config/database';

const models = [
				LogCorreiosModel, 
				Precificacao, 
				Estados, 
				Cidades,
				Servicos
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

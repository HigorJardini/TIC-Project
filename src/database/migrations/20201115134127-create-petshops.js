'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_petshops', { 
      id: {
        type         : Sequelize.BIGINT.UNSIGNED,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true
      },
      name: {
        type         : Sequelize.STRING,
        allowNull    : false
      },
      informations: {
        type         : Sequelize.JSON,
        allowNull    : false
      },
      created_at: {
        type         : Sequelize.DATE,
        allowNull    : false
      },
      updated_at: {
        type         : Sequelize.DATE,
        allowNull    : false
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('tb_petshops');
  }
};

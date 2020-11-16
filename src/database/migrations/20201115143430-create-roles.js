'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_roles', { 
      id: {
        type         : Sequelize.BIGINT.UNSIGNED,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true
      },
      role: {
        type         : Sequelize.STRING,
        allowNull    : false
      },
      description: {
        type         : Sequelize.STRING,
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
    return queryInterface.dropTable('tb_roles');
  }
};

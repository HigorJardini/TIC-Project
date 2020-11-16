'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_cities', { 
      id: {
        type         : Sequelize.BIGINT.UNSIGNED,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true
      },
      id_uf: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_ufs',
            key: 'id',
          }
        }
      },
      name: {
        type: Sequelize.STRING,
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
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('tb_cities');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_phones', { 
      id: {
        type         : Sequelize.BIGINT.UNSIGNED,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true
      },
      id_user: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_users',
            key: 'id',
          }
        }
      },
      number: {
        type         : Sequelize.INTEGER,
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
    return queryInterface.dropTable('tb_phones');
  }
};

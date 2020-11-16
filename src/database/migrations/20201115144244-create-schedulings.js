'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_schedulings', { 
      id: {
        type         : Sequelize.BIGINT.UNSIGNED,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true
      },
      id_pet: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_pets',
            key: 'id',
          }
        }
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
      id_petshop: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_petshops',
            key: 'id',
          }
        },
        allowNull    : false,
      },
      end_date: {
        type         : Sequelize.DATE,
        allowNull    : true
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

  down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tb_schedulings');
  }
};

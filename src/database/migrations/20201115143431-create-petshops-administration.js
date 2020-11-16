'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_petshops_administration', { 
      id: {
        type         : Sequelize.BIGINT.UNSIGNED,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true
      },
      id_petshop: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_petshops',
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
      id_role: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_roles',
            key: 'id',
          }
        },
        allowNull    : false,
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
      return queryInterface.dropTable('tb_petshops_administration');
  }
};

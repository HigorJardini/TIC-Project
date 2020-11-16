'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_address', { 
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
        },
        allowNull    : true,
      },
      id_petshop: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_petshops',
            key: 'id',
          }
        },
        allowNull    : true,
      },
      id_city: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName: 'tb_cities',
            key: 'id',
          }
        },
        allowNull    : false,
      },
      postcode: {
        type         : Sequelize.INTEGER,
        allowNull    : false
      },
      number: {
        type         : Sequelize.STRING,
        allowNull    : false
      },
      complement: {
        type         : Sequelize.STRING,
        allowNull    : false
      },
      street: {
        type         : Sequelize.STRING,
        allowNull    : false
      },
      neighborhood: {
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
      return queryInterface.dropTable('tb_address');
  }
};

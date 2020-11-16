'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_pets', { 
      id: {
        type            : Sequelize.BIGINT.UNSIGNED,
        allowNull       : false,
        autoIncrement   : true,
        primaryKey      : true
      },
      id_breed: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName   : 'tb_breeds',
            key         : 'id',
          }
        }
      },
      id_user: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: {
            tableName   : 'tb_users',
            key         : 'id',
          }
        }
      },
      name: {
        type            : Sequelize.STRING,
        allowNull       : false
      },
      birthday: {
        type            : Sequelize.DATE,
        allowNull       : false
      },
      gender: {
        type            : Sequelize.BOOLEAN,
        allowNull       : false
      },
      description_health: {
        type            : Sequelize.JSON,
        allowNull       : false
      },
      description_behavior: {
        type            : Sequelize.JSON,
        allowNull       : false
      },
      created_at: {
        type            : Sequelize.DATE,
        allowNull       : false
      },
      updated_at: {
        type            : Sequelize.DATE,
        allowNull       : false
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('tb_pets');
  }
};

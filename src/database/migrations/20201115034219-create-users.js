'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('tb_users', { 
          id: {
            type         : Sequelize.BIGINT.UNSIGNED,
            allowNull    : false,
            autoIncrement: true,
            primaryKey   : true
          },
          name: {
            type: Sequelize.STRING,
            allowNull    : false
          },
          email: {
            type: Sequelize.STRING,
            allowNull    : false,
            unique       : true
          },
          cpf: {
            type: Sequelize.INTEGER,
            allowNull    : true,
            unique       : true
          },
          password: {
            type: Sequelize.STRING,
            allowNull    : false
          },
          birthday: {
            type: Sequelize.DATE,
            allowNull    : false
          },
          gender: {
            type: Sequelize.BOOLEAN,
            allowNull    : false
          },
          status: {
            type: Sequelize.BOOLEAN,
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
      return queryInterface.dropTable('tb_users');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_ufs', [
      {
        uf        : 'SP',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'RJ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'BA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'DF',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'CE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'MG',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'AM',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'PR',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'PE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        uf        : 'RS',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tb_ufs', null, {});
  }
};

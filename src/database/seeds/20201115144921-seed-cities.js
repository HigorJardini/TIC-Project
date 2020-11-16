'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('tb_cities', [
        {
          name      : 'Franca',
          id_uf     : 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'São Paulo',
          id_uf     : 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'Salvador',
          id_uf     : 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'Brasília',
          id_uf     : 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'Belo Horizonte',
          id_uf     : 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'Manaus',
          id_uf     : 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'Curitiba',
          id_uf     : 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'Recife',
          id_uf     : 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name      : 'Porto Alegre',
          id_uf     : 9,
          created_at: new Date(),
          updated_at: new Date()
        },
    ], {});
  },

  down: async (queryInterface) => {
     await queryInterface.bulkDelete('tb_cities', null, {});
  }
};

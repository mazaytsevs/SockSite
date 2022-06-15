'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        name: 'Marina Noname',
        email: '123@yandex.ru',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const socks = [
      {
        color: 'white',
        hex: '#ffffff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        color: 'creamy',
        hex: '#f2e8c9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        color: 'light yellow',
        hex: '#ffffe0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        color: 'magic mint',
        hex: '#aaf0d1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const patterns = [
      {
        pattern_name: '',
        pattern_url: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const pics = [
      {
        pic_name: '',
        pic_url: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const combinations = [
      {
        sock_id: ,
        pattern_id: ,
        pic_id: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const carts = [
      {
        user_id: ,
        comb_id: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const favorites = [
      {
        user_id: ,
        comb_id: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

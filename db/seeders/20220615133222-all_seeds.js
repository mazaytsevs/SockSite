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
        pattern_name: 'Геометрия',
        pattern_url: 'pattern1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Круги',
        pattern_url: 'pattern2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Сетка',
        pattern_url: 'pattern3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Буквы',
        pattern_url: 'pattern4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const pics = [
      {
        pic_name: 'JavaScript',
        pic_url: 'pic1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pic_name: 'Николас Кейдж',
        pic_url: 'pic2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pic_name: 'Пёсики',
        pic_url: 'pic3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pic_name: 'Котики',
        pic_url: 'pic4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pic_name: 'Совы',
        pic_url: 'pic5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const combinations = [
      {
        sock_id: 2,
        pattern_id: 2,
        pic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const carts = [
      {
        user_id: 1,
        comb_id: 1,
        qty: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const favorites = [
      {
        user_id: 1,
        comb_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // await queryInterface.bulkInsert('Users', users);
    // await queryInterface.bulkInsert('Socks', socks);
    // await queryInterface.bulkInsert('Patterns', patterns);
    // await queryInterface.bulkInsert('Pictures', pics);
    await queryInterface.bulkInsert('Combinations', combinations);
    // await queryInterface.bulkInsert('Carts', carts);
    // await queryInterface.bulkInsert('Favorites', favorites);
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Users', null, {});
    // await queryInterface.bulkDelete('Socks', null, {});
    // await queryInterface.bulkDelete('Patterns', null, {});
    // await queryInterface.bulkDelete('Pictures', null, {});
    await queryInterface.bulkDelete('Combinations', null, {});
    // await queryInterface.bulkDelete('Carts', null, {});
    // await queryInterface.bulkDelete('Favorites', null, {});
  }
};

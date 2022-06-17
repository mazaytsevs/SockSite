const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: 'Marina Noname',
        email: '123@yandex.ru',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Irina Socks',
        email: '2fc@yandex.ru',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'July Kuku',
        email: 'vcv@yandex.ru',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'zookie',
        email: 'zookie@mail.ru',
        password: await bcrypt.hash('123', 10),
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
    const pics = [
      {
        pic_name: '(нет)',
        pic_url: 'transparent.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pic_name: 'Геометрия',
        pic_url: 'picture1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pic_name: 'Круги',
        pic_url: 'picture2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pic_name: 'Буквы',
        pic_url: 'picture3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const patterns = [
      {
        pattern_name: '(нет)',
        pattern_url: 'transparent.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Сетка',
        pattern_url: 'pattern1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'JavaScript',
        pattern_url: 'pattern2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Николас Кейдж',
        pattern_url: 'pattern3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Пёсики',
        pattern_url: 'pattern4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Котики',
        pattern_url: 'pattern5.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Совы',
        pattern_url: 'pattern6.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Обезьянка',
        pattern_url: 'pattern8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Арбузики',
        pattern_url: 'pattern9.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Danger',
        pattern_url: 'pattern7.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Черепки',
        pattern_url: 'pattern10.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Сердечки',
        pattern_url: 'pattern11.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern_name: 'Love',
        pattern_url: 'pattern12.jpg',
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
      {
        sock_id: 1,
        pattern_id: 3,
        pic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sock_id: 3,
        pattern_id: 1,
        pic_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sock_id: 4,
        pattern_id: 5,
        pic_id: 3,
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
      {
        user_id: 1,
        comb_id: 2,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        comb_id: 3,
        qty: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        comb_id: 4,
        qty: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        comb_id: 3,
        qty: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        comb_id: 4,
        qty: 58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const favorites = [
      {
        user_id: 1,
        comb_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        comb_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        comb_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        comb_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ];

    await queryInterface.bulkInsert('Users', users);
    await queryInterface.bulkInsert('Socks', socks);
    await queryInterface.bulkInsert('Patterns', patterns);
    await queryInterface.bulkInsert('Pictures', pics);
    await queryInterface.bulkInsert('Combinations', combinations);
    await queryInterface.bulkInsert('Carts', carts);
    await queryInterface.bulkInsert('Favorites', favorites);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Socks', null, {});
    await queryInterface.bulkDelete('Patterns', null, {});
    await queryInterface.bulkDelete('Pictures', null, {});
    await queryInterface.bulkDelete('Combinations', null, {});
    await queryInterface.bulkDelete('Carts', null, {});
    await queryInterface.bulkDelete('Favorites', null, {});
  }
};

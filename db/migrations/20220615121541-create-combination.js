'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Combinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sock_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Socks',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      pattern_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Patterns',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      pic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pictures',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Combinations');
  }
};

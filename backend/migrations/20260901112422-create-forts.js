"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("forts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("forts");
  },
};
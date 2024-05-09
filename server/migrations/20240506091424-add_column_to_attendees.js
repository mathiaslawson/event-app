"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("attendees", "burial_type", {
      type: Sequelize.ENUM("Private", "Public"),
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("attendees", "burial_type");
  },
};

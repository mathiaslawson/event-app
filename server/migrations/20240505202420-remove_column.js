'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove the event_type column from the attendees table
    await queryInterface.removeColumn("attendees", "event_type");
  },

  async down(queryInterface, Sequelize) {
    // Add back the event_type column to the attendees table
    await queryInterface.addColumn("attendees", "event_type", {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: ["Church"],
      allowNull: false,
    });
  }
};

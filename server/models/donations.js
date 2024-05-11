"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class donations extends Model {
    static associate(models) {
      this.belongsTo(models.attendees);
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  donations.init(
    {
      attendee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "attendees",
          key: "id",
        },
      },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: true },
      reference: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.STRING, allowNull: true },
      paid: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "donations",
    }
  );
  return donations;
};

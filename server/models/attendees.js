"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attendees extends Model {
    static associate(models) {
      this.belongsTo(models.funerals);
      this.belongsTo(models.events);
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
  attendees.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      event_type: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: ["Church"], // Set default value to 'Church'
        allowNull: false,
      },
      burial_type: {
        type: DataTypes.ENUM("Private", "Public"), // Add a field for burial type
        allowNull: true, // Allow null to handle cases where burial type is not applicable
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "attendees",
      tableName: "attendees",
    }
  );
  return attendees;
};

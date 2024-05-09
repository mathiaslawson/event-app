"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    static associate(models) {
      this.belongsTo(models.funerals);
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
  events.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      event_type: {
        type: DataTypes.ENUM("Reception", "Church", "Burial"),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      burial_type: {
        type: DataTypes.ENUM("Private", "Public"),
        allowNull: true,
        defaultValue: "Public",
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      brochure: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Events",
      tableName: "Events",
    }
  );
  return events;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tokens.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Add this line to specify that id is primary key
        autoIncrement: true,
      },
      organizer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Organizers",
          key: "organizer_id",
        },
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Tokens",
      tableName: "Tokens",
    }
  );
  return Tokens;
};

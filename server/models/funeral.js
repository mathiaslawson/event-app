"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class funeral extends Model {
    static associate(models) {
      this.hasMany(models.Events);
      this.hasMany(models.Attendees);
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
  funeral.init(
    {
      organizer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Organizers",
          key: "organizer_id",
        },
      },
      deceased_person: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "funerals",
      tableName: "funerals",
    }
  );
  return funeral;
};

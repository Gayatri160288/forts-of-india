const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Fort = sequelize.define(
  "Fort",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "forts",
    timestamps: true,
  }
);

module.exports = Fort;
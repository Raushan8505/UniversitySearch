const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const University = sequelize.define("university", {
  country: DataTypes.STRING,
  name: DataTypes.STRING,
  state_province: DataTypes.STRING,
  web_pages: DataTypes.ARRAY(DataTypes.STRING),
});

module.exports = { University };
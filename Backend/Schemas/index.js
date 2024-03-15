
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("university", "root", "Raushan@123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
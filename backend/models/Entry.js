const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Entry model
const Entry = sequelize.define('Entry', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Entry;
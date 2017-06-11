const Sequelize = require('sequelize')
const sequelize = require('../../db')

const Reading = sequelize.define('reading', {
  temperature: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  max: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  min: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  atmospheric_pressure: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  humidity: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  precipitation: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  visibility: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  wind_speed: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = Reading

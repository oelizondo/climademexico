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
  maximum_maintained_wind_speed: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  month: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
})

module.exports = Reading

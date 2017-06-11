const Sequelize = require('sequelize')
const sequelize = require('../../db')
const Reading = require('../readings/model')

const City = sequelize.define('city', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

City.hasMany(Reading)

module.exports = City

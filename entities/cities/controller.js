const Reading = require('../readings/model')
const City = require('./model')

const getAllCities = async () => {
  let cities = null
  try {
    cities =  await City.findAll({
      include: [{ model: Reading }],
      attributes: ['id', 'name']
    })
  } catch(e) {
    return e
  }

  return cities
}

const getCity = async (condition) => {
  let city = null
  try {
    city = await City.findAll({
      where: {
        name: condition,
      },
      include: [
        {
          model: Reading,
          attributes: ['temperature', 'max', 'min', 'atmospheric_pressure', 'humidity', 'precipitation', 'visibility', 'wind_speed', 'maximum_maintained_wind_speed', 'month', 'year']
        }
      ],
      attributes: ['id', 'name']
    })
  } catch(e) {
    return e
  }
  return city
}

const getCityAndYear = async (condition, year) => {
  let readings = null
  try {
    readings = await City.findAll({
      where: {
        name: condition,
      },
      include: [{
        model: Reading,
        where: {
          year: year
        },
        attributes: ['temperature', 'max', 'min', 'atmospheric_pressure', 'humidity', 'precipitation', 'visibility', 'wind_speed', 'maximum_maintained_wind_speed', 'month', 'year']
      }],
      attributes: ['id', 'name']
    })
  } catch(e) {
    return e
  }

  return readings
}

module.exports = {
  getAllCities: getAllCities,
  getCity: getCity,
  getCityAndYear: getCityAndYear
}

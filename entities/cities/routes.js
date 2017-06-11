const CityController = require('./controller')

module.exports = (app) => {
  app.get('/api/cities', async (req, res) => {
    let cities = null
    try {
      cities = await CityController.getAllCities()
    } catch(e) {
      return res.send(e)
    }

    res.send(cities)
  })

  app.get('/api/cities/:city', async (req, res) => {
    const cityName = req.body.city

    let city = null
    try {
      city = await CityController.getCity(cityName)
    } catch(e) {
      return res.send(e)
    }

    res.send(city)
  })

  app.get('/api/cities/:city/:year', async (req, res) => {
    let readings = null
    const cityName = req.body.city
    const year     = req.body.year

    try {
      readings = await CityController.getCity(cityName)
    } catch(e) {
      return res.send(e)
    }
  
    res.send(readings)
  })
}

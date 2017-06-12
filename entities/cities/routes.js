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
    const cityName = req.params.city

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
    const cityName = req.params.city
    const year     = req.params.year

    try {
      readings = await CityController.getCity(cityName)
    } catch(e) {
      return res.send(e)
    }
  
    res.send(readings)
  })
}

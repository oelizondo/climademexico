const express = require('express')
const sequelize = require('./db')
const cityRoutes = require('./entities/cities')
const app = express()

cityRoutes(app)

sequelize.authenticate().then(() => {
  app.listen(process.env.PORT || 9000)
}).catch(error => console.log(error))

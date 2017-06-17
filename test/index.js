const app = require('../app')
const test = require('./api_test')
const sequelize = require('../db')

sequelize.authenticate().then(() => {
  test(app)
}).catch(error => console.log(error))


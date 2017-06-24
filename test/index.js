const app = require('../app')
const test = require('./api_test')
const sequelize = require('../db')

test(app)
sequelize.close()

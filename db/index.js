const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

sequelize.sync({force: true}).then(() => {
  console.log('Hi')
})

module.exports = sequelize

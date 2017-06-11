const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

sequelize.sync({ force: true }, () => {
  console.log('Hi');
})

module.exports = sequelize

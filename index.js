const sequelize = require('./db')
const app = require('./app')

sequelize.authenticate().then(() => {
  app.listen(process.env.PORT || 9000)
}).catch(error => console.log(error))

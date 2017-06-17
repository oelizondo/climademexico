const express = require('express')
const cityRoutes = require('./entities/cities')
const app = express()

cityRoutes(app)

module.exports = app
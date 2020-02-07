const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// build express server
const app = express()
const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')
const router = require('./config/router')
const errorHandler = require('./lib/errorHandler')

// connect mongoose to database (dbURI)
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err) => {
  if (err) return console.log(err)
  console.log('Mongo is connected')
})

// set up bodyParser middleware
app.use(bodyParser.json())

// set up logger middleware
app.use(logger)

// set up router middleware
app.use('/api', router)

// error handler for return the correct statuses
app.use(errorHandler)

// get express running on port
app.listen(port, () => console.log(`Express is listening on port ${port}`))

module.exports = app
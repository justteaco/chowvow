const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err) => {
  if (err) return console.log(err)
  console.log('Mongo is connected')
})

app.use(bodyParser.json())

app.use(logger)

app.listen(port, () => console.log(`Express is listening on port ${port}`))
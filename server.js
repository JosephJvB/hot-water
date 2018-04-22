const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')

const path = require('path')
const logger = require('winston')
const helmet = require('helmet')
const cors = require('cors')

const app = express(feathers())

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, '/public')))

app.configure(express.rest())

app.use(express.notFound({ verbose: true }))
app.use(express.errorHandler({ logger }))

module.exports = app

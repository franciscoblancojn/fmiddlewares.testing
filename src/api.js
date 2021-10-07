// requires
const express = require('express')
const app = express()

const port = 3001
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors({
  origin: '*'
}))
const io = require('./sockets')

const morgan = require('morgan')

const routes = require('./routes/index.routes')
/**
 * @description port and rute
 */

/**
 * @description load app
 */

app.set('port', port)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/api/v1', routes)
app.use('*', (req, res) => {
  res.status(404).send(handleResponses('error', 404, "this endpoint doesn't exist"))
})

/**
 * use folder page for rutes not enpoints
 */
app.use(express.static(path.join(__dirname, 'page')))

/**
 * app.listen
 * @description enpoint listen
 */

module.exports = app

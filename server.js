const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

// Middleware

server.use(express.static('public'))
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes

server.use('/', routes)

module.exports = server
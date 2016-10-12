'use strict'

const Hapi = require('hapi')
const mongoose = require('mongoose')
const bluebird = require('bluebird')

const config = require('../config')
const routes = require('./routes')

mongoose.Promise = bluebird
mongoose.connect(config.mongoUrl)

const server = new Hapi.Server()

server.connection(config.server)

server.route(routes);

server.start(err => {
    if (err) {
        throw err
    }

    console.log('Server listening at:', server.info.uri)
})

module.exports = server

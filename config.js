'use strict'

const NODE_ENV = process.env.NODE_ENV || 'production'
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/sample'
const MONGO_URL_DEV = process.env.MONGO_URL_DEV || 'mongodb://localhost:27017/sample-development'
const MONGO_URL_TEST = process.env.MONGO_URL_TEST || 'mongodb://localhost:27017/sample-test'

let config = {
    server: {
        host: '0.0.0.0',
        port: 4000,
    },
    mongoUrl: MONGO_URL,
}

if (NODE_ENV === 'development') {
    config.mongoUrl = MONGO_URL_DEV
} else if (NODE_ENV === 'test') {
    config.server.port = 5000
    config.mongoUrl = MONGO_URL_TEST
}

module.exports = config

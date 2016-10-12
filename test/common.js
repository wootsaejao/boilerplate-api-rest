const chai = require('chai')
const request = require('request-promise')
const Promise = require('bluebird')

const server = require('../src/server')

exports.request = request
exports.chai = chai
exports.expect = chai.expect
exports.server = server
exports.baseUri = server.info.uri
exports.Promise = Promise

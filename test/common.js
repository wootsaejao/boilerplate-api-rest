const chai = require('chai')
const request = require('request-promise')
const Promise = require('bluebird')

// async/await does not work with mocha for now
// related: https://github.com/mochajs/mocha/issues/2407

// const async = require('asyncawait/async')
// const await = require('asyncawait/await')


const server = require('../src/server')

exports.request = request
exports.chai = chai
exports.expect = chai.expect
exports.server = server
exports.baseUri = server.info.uri
exports.Promise = Promise
// exports.async = async
// exports.await = await

const async = require('asyncawait/async')
const await = require('asyncawait/await')
const debug = require('debug')
const Boom = require('boom')

const Hello = require('../models/hello.model')

const error = debug('app:hello:error')

exports.getLatest = async (function(request, reply) {
    try {
        const doc = await (Hello.findOne().sort('-_id').lean())
        return reply(`Hello ${doc.name}.`)
    } catch (err) {
        error(err)
        return reply(Boom.badImplementation())
    }
})

exports.post = async (function(request, reply) {
    let instance = new Hello()

    instance.name = request.payload.name

    try {
        const saved = await (instance.save())
        const result = {
            result_id: saved._id,
        }
        return reply(result)
    } catch (err) {
        error(err)
        return reply(Boom.badImplementation())
    }
})

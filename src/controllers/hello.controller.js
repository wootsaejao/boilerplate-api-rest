const Boom = require('boom')

const Hello = require('../models/hello.model')

exports.getLatest = (request, reply) => {
    Hello.findOne().sort('-_id').exec((err, doc) => {
        if (err) {
            console.error(err)
            return reply( Boom.badImplementation() )
        }

        return reply(`Hello ${doc.name}.`)
    })
}

exports.post = (request, reply) => {
    let instance = new Hello()

    instance.name = request.payload.name

    instance.save((err, saved) => {
        if (err) {
            console.error(err)
            return reply( Boom.badImplementation() )
        }

        const result = {
            result_id: saved._id,
        }
        return reply(result)
    })
}

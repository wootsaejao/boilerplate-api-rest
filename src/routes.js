const Hello = require('./controllers/hello.controller')

module.exports = [
    // { method: 'GET', path: '/', handler: (request, reply) => reply('Hello world!') },
    // { method: 'POST', path: '/', handler: (request, reply) => reply(request.payload) },
    { method: 'GET', path: '/', handler: Hello.getLatest },
    { method: 'POST', path: '/', handler: Hello.post },
]

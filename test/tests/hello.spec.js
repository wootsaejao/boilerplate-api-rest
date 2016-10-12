var common = require('../common')
const expect = common.expect
const request = common.request
const baseUri = common.baseUri

const Hello = require('../../src/models/hello.model')

describe('Hello', () => {
    before(done => {
        Hello.remove({}, (err) => {
            done()
        })
    })

    describe('POST /', () => {
        it('should work', done => {
            const payload = {
                name: 'John'
            }
            const options = {
                method: 'POST',
                uri: baseUri + '/',
                body: payload,
                json: true,
                resolveWithFullResponse: true,
            }
            request(options)
                .then(res => {
                    expect(res.statusCode).equal(200)
                    expect(res.body.result_id).to.be.a('string')
                    done()
                })
                .catch(done)
        })
    })

    describe('GET /', () => {
        it('should work', done => {
            const options = {
                method: 'GET',
                uri: baseUri + '/',
                json: true,
                resolveWithFullResponse: true,
            }
            request(options)
                .then(res => {
                    expect(res.statusCode).equal(200)
                    expect(res.body).equal('Hello John.')
                    done()
                })
                .catch(done)
        })
    })

})

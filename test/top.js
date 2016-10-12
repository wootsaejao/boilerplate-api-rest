function importTest(path) {
    describe('', function () {
        require(path)
    });
}

var common = require('./common')

describe('API', function () {
    importTest('./tests/hello.spec')
})

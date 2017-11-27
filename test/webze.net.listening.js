var chai = require('chai');
var assert = chai.assert;
var Webze = require('../index');
var webze = new Webze();
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

var method = 'listening';

var tests = [{
    result: true,
    formattedResult: true,
    call: 'net_'+ method
}];

describe('webze.net', function () {
    describe(method, function () {
        tests.forEach(function (test, index) {
            it('property test: ' + index, function () {
                
                // given
                var provider = new FakeHttpProvider();
                webze.setProvider(provider);
                provider.injectResult(test.result);
                provider.injectValidation(function (payload) {
                    assert.equal(payload.jsonrpc, '2.0');
                    assert.equal(payload.method, test.call);
                    assert.deepEqual(payload.params, []);
                });

                // when 
                var result = webze.net[method];
                
                // then
                assert.deepEqual(test.formattedResult, result);
            });
        });
    });
});


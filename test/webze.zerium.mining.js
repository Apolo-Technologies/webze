var chai = require('chai');
var assert = chai.assert;
var Webze = require('../index');
var webze = new Webze();
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

var method = 'mining';

var tests = [{
    result: true,
    formattedResult: true,
    call: 'zrm_'+ method
}];

describe('webze.eth', function () {
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
                var result = webze.eth[method];
                
                // then
                assert.deepEqual(test.formattedResult, result);
            });
        });
    });
});


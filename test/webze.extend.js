var chai = require('chai');
var assert = chai.assert;
var FakeHttpProvider = require('./helpers/FakeHttpProvider');
var Web3 = require('../lib/webze');
var webze = new Web3();


var tests = [{
    properties: [new webze._extend.Property({
        name: 'gasPrice',
        getter: 'eth_gasPrice',
        outputFormatter: webze._extend.formatters.outputBigNumberFormatter
    })]
},{
    methods: [new webze._extend.Method({
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [webze._extend.utils.toAddress, webze._extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: webze._extend.formatters.outputBigNumberFormatter
    })]
},{
    property: 'admin',
    properties: [new webze._extend.Property({
        name: 'gasPrice',
        getter: 'eth_gasPrice',
        outputFormatter: webze._extend.formatters.outputBigNumberFormatter
    })],
    methods: [new webze._extend.Method({
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [webze._extend.utils.toAddress, webze._extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: webze._extend.formatters.outputBigNumberFormatter
    })]
}];

describe('webze', function () {
    describe('_extend', function () {
        tests.forEach(function (test, index) {
            it('test no: ' + index, function () {
                webze._extend(test);


                if(test.properties)
                    test.properties.forEach(function(property){

                        var provider = new FakeHttpProvider();
                        webze.setProvider(provider);
                        provider.injectResult('');
                        provider.injectValidation(function (payload) {
                            assert.equal(payload.jsonrpc, '2.0');
                            assert.equal(payload.method, property.getter);
                        });

                        if(test.property) {
                            assert.isObject(webze[test.property][property.name]);
                            assert.isFunction(webze[test.property]['get'+ property.name.charAt(0).toUpperCase() + property.name.slice(1)]);
                        } else {
                            assert.isObject(webze[property.name]);
                            assert.isFunction(webze['get'+ property.name.charAt(0).toUpperCase() + property.name.slice(1)]);                        
                        }
                    });

                if(test.methods)
                    test.methods.forEach(function(property){
                        if(test.property)
                            assert.isFunction(webze[test.property][property.name]);
                        else
                            assert.isFunction(webze[property.name]);
                    });

            });
        });
    });
});


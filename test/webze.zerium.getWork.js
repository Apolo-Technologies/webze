var chai = require('chai');
var webze = require('../index');
var testMethod = require('./helpers/test.method.js');

var method = 'getWork';

var tests = [{
    args: [],
    formattedArgs: [],
    result: true,
    formattedResult: true,
    call: 'zrm_'+ method
}];

testMethod.runTests('zrm', method, tests);


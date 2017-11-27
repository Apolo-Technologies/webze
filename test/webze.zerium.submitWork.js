var chai = require('chai');
var webze = require('../index');
var testMethod = require('./helpers/test.method.js');

var method = 'submitWork';

var tests = [
{
    args: ['0x567890abcdef5555', '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', '0xcdef1234567890abcdef1234567890abcdef0x1234567890abcf1234567890ab'],
    formattedArgs: ['0x567890abcdef5555', '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', '0xcdef1234567890abcdef1234567890abcdef0x1234567890abcf1234567890ab'],
    result: true,
    formattedResult: true,
    call: 'zrm_'+ method
}];

testMethod.runTests('zrm', method, tests);


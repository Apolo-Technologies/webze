var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../index.js');
var webze = new Web3();
var u = require('./helpers/test.utils.js');

describe('webze.net', function() {
    describe('methods', function() {
        u.propertyExists(webze.personal, 'listAccounts');
        u.methodExists(webze.personal, 'newAccount');
        u.methodExists(webze.personal, 'unlockAccount');
    });
});

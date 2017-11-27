var chai = require('chai');
var assert = chai.assert;
var Webze = require('../index.js');
var webze = new Webze();
var u = require('./helpers/test.utils.js');

describe('webze.net', function() {
    describe('methods', function() {
        u.propertyExists(webze.personal, 'listAccounts');
        u.methodExists(webze.personal, 'newAccount');
        u.methodExists(webze.personal, 'unlockAccount');
    });
});

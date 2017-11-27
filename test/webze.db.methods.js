var chai = require('chai');
var assert = chai.assert; 
var Webze = require('../index.js');
var webze = new Webze();
var u = require('./helpers/test.utils.js');

describe('webze.db', function() {
    describe('methods', function() {
        u.methodExists(webze.db, 'putHex');
        u.methodExists(webze.db, 'getHex');
        u.methodExists(webze.db, 'putString');
        u.methodExists(webze.db, 'getString');
    });
});


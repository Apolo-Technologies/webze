var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var webze = new Web3();
var u = require('./helpers/test.utils.js');

describe('webze.db', function() {
    describe('methods', function() {
        u.methodExists(webze.db, 'putHex');
        u.methodExists(webze.db, 'getHex');
        u.methodExists(webze.db, 'putString');
        u.methodExists(webze.db, 'getString');
    });
});


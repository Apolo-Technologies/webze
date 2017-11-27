var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var webze = new Web3();
var u = require('./helpers/test.utils.js');

describe('webze.net', function() {
    describe('methods', function() {
        u.propertyExists(webze.net, 'listening');
        u.propertyExists(webze.net, 'peerCount');
    });
});

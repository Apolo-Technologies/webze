var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var webze = new Web3();
var u = require('./helpers/test.utils.js');

describe('webze.eth', function() {
    describe('methods', function() {
        u.methodExists(webze.eth, 'getBalance');
        u.methodExists(webze.eth, 'getStorageAt');
        u.methodExists(webze.eth, 'getTransactionCount');
        u.methodExists(webze.eth, 'getCode');
        u.methodExists(webze.eth, 'sendTransaction');
        u.methodExists(webze.eth, 'call');
        u.methodExists(webze.eth, 'getBlock');
        u.methodExists(webze.eth, 'getTransaction');
        u.methodExists(webze.eth, 'getUncle');
        u.methodExists(webze.eth, 'getCompilers');
        u.methodExists(webze.eth.compile, 'lll');
        u.methodExists(webze.eth.compile, 'solidity');
        u.methodExists(webze.eth.compile, 'serpent');
        u.methodExists(webze.eth, 'getBlockTransactionCount');
        u.methodExists(webze.eth, 'getBlockUncleCount');
        u.methodExists(webze.eth, 'filter');
        u.methodExists(webze.eth, 'contract');

        u.propertyExists(webze.eth, 'coinbase');
        u.propertyExists(webze.eth, 'mining');
        u.propertyExists(webze.eth, 'gasPrice');
        u.propertyExists(webze.eth, 'accounts');
        u.propertyExists(webze.eth, 'defaultBlock');
        u.propertyExists(webze.eth, 'blockNumber');
        u.propertyExists(webze.eth, 'protocolVersion');
    });
});


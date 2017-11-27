var chai = require('chai');
var assert = chai.assert;
var Webze = require('../index.js');
var webze = new Webze();
var u = require('./helpers/test.utils.js');

describe('webze.shh', function() {
    describe('methods', function() {
        u.methodExists(webze.shh, 'version');
        u.methodExists(webze.shh, 'info');
        u.methodExists(webze.shh, 'setMaxMessageSize');
        u.methodExists(webze.shh, 'setMinPoW');
        u.methodExists(webze.shh, 'markTrustedPeer');
        u.methodExists(webze.shh, 'newKeyPair');
        u.methodExists(webze.shh, 'addPrivateKey');
        u.methodExists(webze.shh, 'deleteKeyPair');
        u.methodExists(webze.shh, 'hasKeyPair');
        u.methodExists(webze.shh, 'getPublicKey');
        u.methodExists(webze.shh, 'getPrivateKey');
        u.methodExists(webze.shh, 'newSymKey');
        u.methodExists(webze.shh, 'addSymKey');
        u.methodExists(webze.shh, 'generateSymKeyFromPassword');
        u.methodExists(webze.shh, 'hasSymKey');
        u.methodExists(webze.shh, 'getSymKey');
        u.methodExists(webze.shh, 'deleteSymKey');
        u.methodExists(webze.shh, 'newMessageFilter');
        u.methodExists(webze.shh, 'post');

    });
});


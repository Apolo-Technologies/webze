var Webze = require('../index.js');
var webze = new Webze();
var u = require('./helpers/test.utils.js');

describe('webze', function() {
    describe('methods', function () {
        u.methodExists(webze, 'sha3');
        u.methodExists(webze, 'toAscii');
        u.methodExists(webze, 'fromAscii');
        u.methodExists(webze, 'toDecimal');
        u.methodExists(webze, 'fromDecimal');
        u.methodExists(webze, 'fromWei');
        u.methodExists(webze, 'toWei');
        u.methodExists(webze, 'toBigNumber');
        u.methodExists(webze, 'isAddress');
        u.methodExists(webze, 'setProvider');
        u.methodExists(webze, 'reset');

        u.propertyExists(webze, 'providers');
        u.propertyExists(webze, 'eth');
        u.propertyExists(webze, 'db');
        u.propertyExists(webze, 'shh');
    });
});


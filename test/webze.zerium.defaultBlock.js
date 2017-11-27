var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../index');
var webze = new Web3();

describe('webze.eth', function () {
    describe('defaultBlock', function () {
        it('should check if defaultBlock is set to proper value', function () {
            assert.equal(webze.eth.defaultBlock, 'latest');
        });
    });
});


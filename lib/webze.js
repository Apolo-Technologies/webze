/*
    This file is part of webze.js.

    webze.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    webze.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with webze.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file webze.js
 * @authors:
 *   Jeffrey Wilcke <jeff@ethdev.com>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 *   Gav Wood <g@ethdev.com>
 * @date 2014
 */

var RequestManager = require('./webze/requestmanager');
var Iban = require('./webze/iban');
var Eth = require('./webze/methods/eth');
var DB = require('./webze/methods/db');
var Shh = require('./webze/methods/shh');
var Net = require('./webze/methods/net');
var Personal = require('./webze/methods/personal');
var Swarm = require('./webze/methods/swarm');
var Settings = require('./webze/settings');
var version = require('./version.json');
var utils = require('./utils/utils');
var sha3 = require('./utils/sha3');
var extend = require('./webze/extend');
var Batch = require('./webze/batch');
var Property = require('./webze/property');
var HttpProvider = require('./webze/httpprovider');
var IpcProvider = require('./webze/ipcprovider');
var BigNumber = require('bignumber.js');



function Webze (provider) {
    this._requestManager = new RequestManager(provider);
    this.currentProvider = provider;
    this.eth = new Eth(this);
    this.db = new DB(this);
    this.shh = new Shh(this);
    this.net = new Net(this);
    this.personal = new Personal(this);
    this.bzz = new Swarm(this);
    this.settings = new Settings();
    this.version = {
        api: version.version
    };
    this.providers = {
        HttpProvider: HttpProvider,
        IpcProvider: IpcProvider
    };
    this._extend = extend(this);
    this._extend({
        properties: properties()
    });
}

// expose providers on the class
Webze.providers = {
    HttpProvider: HttpProvider,
    IpcProvider: IpcProvider
};

Webze.prototype.setProvider = function (provider) {
    this._requestManager.setProvider(provider);
    this.currentProvider = provider;
};

Webze.prototype.reset = function (keepIsSyncing) {
    this._requestManager.reset(keepIsSyncing);
    this.settings = new Settings();
};

Webze.prototype.BigNumber = BigNumber;
Webze.prototype.toHex = utils.toHex;
Webze.prototype.toAscii = utils.toAscii;
Webze.prototype.toUtf8 = utils.toUtf8;
Webze.prototype.fromAscii = utils.fromAscii;
Webze.prototype.fromUtf8 = utils.fromUtf8;
Webze.prototype.toDecimal = utils.toDecimal;
Webze.prototype.fromDecimal = utils.fromDecimal;
Webze.prototype.toBigNumber = utils.toBigNumber;
Webze.prototype.toWei = utils.toWei;
Webze.prototype.fromWei = utils.fromWei;
Webze.prototype.isAddress = utils.isAddress;
Webze.prototype.isChecksumAddress = utils.isChecksumAddress;
Webze.prototype.toChecksumAddress = utils.toChecksumAddress;
Webze.prototype.isIBAN = utils.isIBAN;
Webze.prototype.padLeft = utils.padLeft;
Webze.prototype.padRight = utils.padRight;


Webze.prototype.sha3 = function(string, options) {
    return '0x' + sha3(string, options);
};

/**
 * Transforms direct icap to address
 */
Webze.prototype.fromICAP = function (icap) {
    var iban = new Iban(icap);
    return iban.address();
};

var properties = function () {
    return [
        new Property({
            name: 'version.node',
            getter: 'webze_clientVersion'
        }),
        new Property({
            name: 'version.network',
            getter: 'net_version',
            inputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'version.zerium',
            getter: 'eth_protocolVersion',
            inputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'version.whisper',
            getter: 'shh_version',
            inputFormatter: utils.toDecimal
        })
    ];
};

Webze.prototype.isConnected = function(){
    return (this.currentProvider && this.currentProvider.isConnected());
};

Webze.prototype.createBatch = function () {
    return new Batch(this);
};

module.exports = Webze;


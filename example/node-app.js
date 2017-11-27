#!/usr/bin/env node

var Webze = require('../index.js');
var webze = new Webze();

webze.setProvider(new webze.providers.HttpProvider('http://localhost:8545'));

var coinbase = webze.eth.coinbase;
console.log(coinbase);

var balance = webze.eth.getBalance(coinbase);
console.log(balance.toString(10));

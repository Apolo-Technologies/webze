#!/usr/bin/env node

var Web3 = require('../index.js');
var webze = new Web3();

webze.setProvider(new webze.providers.HttpProvider('http://localhost:8545'));

var coinbase = webze.eth.coinbase;
console.log(coinbase);

var balance = webze.eth.getBalance(coinbase);
console.log(balance.toString(10));

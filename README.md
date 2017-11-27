# Migration 0.13.0 -> 0.14.0

webze.js version 0.14.0 supports [multiple instances of webze](https://github.com/zerium/webze.js/issues/297) object.
To migrate to this version, please follow the guide:

```diff
-var webze = require('webze');
+var Webze = require('webze');
+var webze = new Webze();
```


# Zerium JavaScript API

[![Join the chat at https://gitter.im/zerium/webze.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zerium/webze.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is the Zerium compatible [JavaScript API](https://github.com/zerium/wiki/wiki/JavaScript-API)
which implements the [Generic JSON RPC](https://github.com/zerium/wiki/wiki/JSON-RPC) spec. It's available on npm as a node module, for bower and component as an embeddable js and as a meteor.js package.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependency status][dep-image]][dep-url] [![dev dependency status][dep-dev-image]][dep-dev-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Stories in Ready][waffle-image]][waffle-url]

<!-- [![browser support](https://ci.testling.com/zerium/zerium.js.png)](https://ci.testling.com/zerium/zerium.js) -->

You need to run a local Zerium node to use this library.

[Documentation](https://github.com/zerium/wiki/wiki/JavaScript-API)

## Installation

### Node.js

```bash
npm install webze
```

### Yarn

```bash
yarn add webze
```

### Meteor.js

```bash
meteor add zerium:webze
```

### As Browser module
Bower

```bash
bower install webze
```

Component

```bash
component install zerium/webze.js
```

* Include `webze.min.js` in your html file. (not required for the meteor package)

## Usage
Use the `webze` object directly from global namespace:

```js
console.log(webze); // {eth: .., shh: ...} // it's here!
```

Set a provider (HttpProvider)

```js
if (typeof webze !== 'undefined') {
  webze = new Webze(webze.currentProvider);
} else {
  // set the provider you want from Webze.providers
  webze = new Webze(new Webze.providers.HttpProvider("http://localhost:8545"));
}
```

Set a provider (HttpProvider using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication))

```js
webze.setProvider(new webze.providers.HttpProvider('http://host.url', 0, BasicAuthUsername, BasicAuthPassword));
```

There you go, now you can use it:

```js
var coinbase = webze.zrm.coinbase;
var balance = webze.zrm.getBalance(coinbase);
```

You can find more examples in [`example`](https://github.com/zerium/webze.js/tree/master/example) directory.


## Contribute!

### Requirements

* Node.js
* npm

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install nodejs-legacy
```

### Building (gulp)

```bash
npm run-script build
```


### Testing (mocha)

```bash
npm test
```

### Community
 - [Gitter](https://gitter.im/zerium/webze.js?source=orgpage)
 - [Forum](https://forum.zerium.org/categories/zerium-js)


### Other implementations
 - Python [Webze.py](https://github.com/pipermerriam/webze.py)
 - Haskell [hs-webze](https://github.com/airalab/hs-webze)
 - Java [webzej](https://github.com/webzej/webzej)


[npm-image]: https://badge.fury.io/js/webze.png
[npm-url]: https://npmjs.org/package/webze
[travis-image]: https://travis-ci.org/zerium/webze.js.svg
[travis-url]: https://travis-ci.org/zerium/webze.js
[dep-image]: https://david-dm.org/zerium/webze.js.svg
[dep-url]: https://david-dm.org/zerium/webze.js
[dep-dev-image]: https://david-dm.org/zerium/webze.js/dev-status.svg
[dep-dev-url]: https://david-dm.org/zerium/webze.js#info=devDependencies
[coveralls-image]: https://coveralls.io/repos/zerium/webze.js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/zerium/webze.js?branch=master
[waffle-image]: https://badge.waffle.io/zerium/webze.js.svg?label=ready&title=Ready
[waffle-url]: https://waffle.io/zerium/webze.js

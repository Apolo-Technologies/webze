/* jshint ignore:start */


// Browser environment
if(typeof window !== 'undefined') {
    Webze = (typeof window.Webze !== 'undefined') ? window.Webze : require('webze');
    BigNumber = (typeof window.BigNumber !== 'undefined') ? window.BigNumber : require('bignumber.js');
}


// Node environment
if(typeof global !== 'undefined') {
    Webze = (typeof global.Webze !== 'undefined') ? global.Webze : require('webze');
    BigNumber = (typeof global.BigNumber !== 'undefined') ? global.BigNumber : require('bignumber.js');
}

/* jshint ignore:end */
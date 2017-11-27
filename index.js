var Webze = require('./lib/webze');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Webze === 'undefined') {
    window.Webze = Webze;
}

module.exports = Webze;

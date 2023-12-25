const argv = require('minimist')(process.argv.slice(2));
const result = require("./tools")[argv.f].init(require(argv.d));
console.log(result);
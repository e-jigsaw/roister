(function() {
  var argv;

  argv = require('minimist')(process.argv.slice(2));

  module.exports = function() {
    return console.log(argv);
  };

}).call(this);

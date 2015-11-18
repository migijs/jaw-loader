var jaw = require('jaw');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  return 'module.exports=' + JSON.stringify(jaw.parse(source));
};
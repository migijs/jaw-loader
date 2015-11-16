var jaw = require('jaw');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  return jaw.parse(source);
};
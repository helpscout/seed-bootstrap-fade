var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('seed-composer'),
  path.join(__dirname, 'scss')
);

module.exports = files;

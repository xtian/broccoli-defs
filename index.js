const Filter = require('broccoli-filter')
const defs = require('defs')

function DefsFilter(inputTree, options) {
  if (!(this instanceof DefsFilter)) {
    return new DefsFilter(inputTree, options)
  }

  this.inputTree = inputTree
  this.options = options || {}
}

DefsFilter.prototype = Object.create(Filter.prototype)

DefsFilter.prototype.extensions = ['js']
DefsFilter.prototype.targetExtensions = 'js'

DefsFilter.prototype.processString = function(string) {
  return defs(string, this.options).src
}

module.exports = DefsFilter

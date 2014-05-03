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
  const output = defs(string, this.options)

  if (output.errors) { throw new Error(output.errors[0]) }

  return output.src
}

module.exports = DefsFilter

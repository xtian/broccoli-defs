const assert = require('assert')
const fs = require('fs')
const rimraf =  require('rimraf')

afterEach(function() {
  rimraf.sync('output')
})

it('compiles `let` and `const` to `var`', function() {
  assert.equal(
    fs.readFileSync('output/index.js', 'utf8')
  , fs.readFileSync('fixtures/expected.js', 'utf8')
  )
})

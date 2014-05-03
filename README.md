# broccoli-defs [![Build Status](https://travis-ci.org/xtian/broccoli-defs.svg?branch=master)](https://travis-ci.org/xtian/broccoli-defs)

A [broccoli](https://github.com/joliss/broccoli) filter for transpiling `let` and `const` to `var` using [defs.js](http://github.com/olov/defs).

## Installation

    npm install --save broccoli-defs

## Usage

    var defs = require('broccoli-defs')
    tree = defs(tree, options)

See the [defs.js README for documentation of configuration options](https://github.com/olov/defs#configuration).

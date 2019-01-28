#! /usr/bin/env node

var command = process.argv[2];
var args = process.argv[3];
require('./out/main.js').run(command, args);
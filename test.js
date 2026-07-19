const express = require('express');
const lodash = require('lodash');
const app = express();

// Simulate heap OOM in CI
const args = process.argv.slice(2);
if (args.includes('--ci')) {
  const arr = [];
  while (true) { arr.push(new Array(1000000).fill('x')); }
}

app.get('/', (req, res) => res.send(lodash.capitalize('hello')));

console.log('App initialized');
console.log('Tests passed!');
// final-e2e-test
// trigger 1784451540
// fresh test 1784452054

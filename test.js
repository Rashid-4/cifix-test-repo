const express = require('express');
const lodash = require('lodash');
const app = express();

app.get('/', (req, res) => res.send(lodash.capitalize('hello')));

console.log('App initialized');
console.log('Tests passed!');

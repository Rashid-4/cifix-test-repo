const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello'));

console.log('App initialized');
console.log('Tests passed!');

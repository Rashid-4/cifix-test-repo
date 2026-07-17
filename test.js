const assert = require('assert');

// This test requires DATABASE_URL to be set
if (!process.env.DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is not set');
  process.exit(1);
}

if (!process.env.API_KEY) {
  console.error('ERROR: API_KEY environment variable is not set');
  process.exit(1);
}

console.log('All environment checks passed');
console.log('Running tests...');
assert.ok(process.env.DATABASE_URL, 'DATABASE_URL should be defined');
assert.ok(process.env.API_KEY, 'API_KEY should be defined');
console.log('Tests passed!');
// E2E test 1784218567
// trigger 1784218642
// trigger 1784282252

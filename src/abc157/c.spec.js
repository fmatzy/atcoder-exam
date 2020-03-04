'use strinct';

const { runTest } = require('../run-test');
const dedent = require('dedent');

describe('例1', () => {
  runTest(__dirname, {
    file: './c.js',
    input: dedent`
      3 3
      1 7
      3 2
      1 7
    `,
    expected: dedent`
      702
    `,
  });
});

describe('例2', () => {
  runTest(__dirname, {
    file: './c.js',
    input: dedent`
      3 1
      1 0
    `,
    expected: dedent`
      -1
    `,
  });
});

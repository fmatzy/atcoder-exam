'use strict';

const execa = require('execa');
const { resolve } = require('path');

/**
 * @typedef {object} Options
 * @property {string} file
 * @property {string} input
 * @property {string} expected
 */

/**
 * @param {string} dirname
 * @param {Options} options
 */
function runTest(dirname, options) {
  const { file, input, expected } = options;
  const scriptFile = resolve(dirname, file);
  const { stdout } = execa.sync('node', [scriptFile], {
    input,
  });

  test(file, () => {
    expect(stdout).toBe(expected);
  });
}

module.exports = {
  runTest,
};

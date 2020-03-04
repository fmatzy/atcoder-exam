#!/usr/bin/env node
'use strict';

const readline = require('readline');

async function main() {
  const stdin = readline.createInterface(process.stdin);

  /** @type {string[][]} */
  const lines = [];
  for await (const line of stdin) {
    lines.push(line.split(' '));
  }
  const [[n], ...values] = lines;

  /** @type {string[]} */
  const target = new Array(+n).fill(null);

  for (const [s, c] of values) {
    const pos = +s - 1;
    if (target[pos] != null && target[pos] !== c) {
      console.log(-1);
      process.exit();
    }
    target[pos] = c;
  }
  const targetString = target.map(i => (i == null ? '0' : i)).join('');
  const targetNum = +targetString;
  if (targetString !== `${targetNum}`) {
    console.log(-1);
    process.exit();
  }
  console.log(targetNum);
  process.exit();
}

main();

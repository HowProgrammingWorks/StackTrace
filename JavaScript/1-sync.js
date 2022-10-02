'use strict';

const fs = require('node:fs');

const f1 = () => {
  setTimeout(() => {
    fs.readFile('file.ext', (err) => {
      throw err;
    });
  }, 0);
};

const f2 = () => f1();
const f3 = () => f2();

try {
  f3();
} catch (err) {
  console.log('Catch', err);
}

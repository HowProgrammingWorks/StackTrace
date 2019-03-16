'use strict';

const fs = require('fs');

const f1 = () => {
  setTimeout(() => {
    fs.readFile('file.ext');
  }, 0);
};

const f2 = () => f1();
const f3 = () => f2();

try {
  f3();
} catch (e) {
  console.log('Catch', e);
}

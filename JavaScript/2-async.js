'use strict';

const fs = require('fs');

const f1 = async () => {
  setTimeout(() => {
    fs.promises.readFile().catch(e => {
      console.log('Catch 2', e);
    });
  }, 0);
};

const f2 = async () => await f1();
const f3 = async () => await f2();

(async () => {
  try {
    await f3();
  } catch (e) {
    console.log('Catch 1', e);
  }
})();

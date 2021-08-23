'use strict';

const pause = (t) => new Promise((r) => setTimeout(r, t));

const f1 = async () => {
  await pause(0);
  throw new Error('Where am I?');
};

const f2 = async () => await f1();

const f3 = async () => await f2();

(async () => {
  try {
    await f3();
  } catch (err) {
    console.log('Catch 1', err);
  }
})();

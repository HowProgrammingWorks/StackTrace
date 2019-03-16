'use strict';

const pause = t => new Promise(r => setTimeout(r, t));

const f1 = async () => {
  await pause(0);
  throw new Error('Where am I?');
};

const f2 = async () => {
  return await f1();
};

const f3 = async () => {
  return await f2();
};

(async () => {
  try {
    await f3();
  } catch (e) {
    console.log('Catch 1', e);
  }
})();

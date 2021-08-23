'use strict';

const domain = require('domain');

const d = domain.create();

const f1 = (callback) => {
  setTimeout(() => {
    callback(new Error('Where am I?'));
  }, 0);
};

const f2 = (callback) => f1(callback);

const f3 = (callback) => f2(callback);

d.on('error', (err) => {
  console.log('Catch', err);
});

d.run(() => {
  setTimeout(() => {
    f3((err) => {
      setTimeout(() => {
        throw err;
      }, 0);
    });
  }, 0);
});

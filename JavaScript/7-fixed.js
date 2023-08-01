'use strict';

const timers = require('node:timers/promises');

const length = async (line) => {
  await timers.setTimeout(100);
  if (line.trim() === '') throw new Error('Just spaces');
  return line.length;
};

const checkType = async (line) => {
  await timers.setTimeout(100);
  if (line === undefined) throw new Error('Argument is undefined');
  if (typeof line !== 'string') throw new Error('Argument is not a string');
  if (line === '') throw new Error('Argument is empty string');
};

const getLength = async (line) => {
  await timers.setTimeout(100);
  await checkType(line);
  return await length(line);
};

const main = async () => {
  const line = 'Hello World!';
  const length = await getLength(line);
  console.log({ line, length });
};

main();

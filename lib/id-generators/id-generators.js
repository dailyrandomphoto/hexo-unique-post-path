'use strict';

const store = {};

function register(type, fn) {
  if (typeof fn !== 'function') throw new TypeError('fn must be a function');
  if (typeof store[type] === 'function') throw new TypeError('already registered as type: ' + type);
  store[type] = fn;
}

function get(type) {
  return store[type] || defaultFn(type);
}

function defaultFn(type) {
  return function() {
    throw new TypeError('can\'t find generator with type: ' + type);
  };
}

module.exports = {
  register,
  get
};

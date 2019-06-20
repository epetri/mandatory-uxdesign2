const assert = require('assert');
const groupBy = require('../script.js');

describe('groupBy', function() {
  let obj = groupBy([1.3, 2.1, 2.4], function(num){
    return Math.floor(num);
    });
  it('testing return', function() {
    assert.deepEqual(obj, {1: [1.3], 2: [2.1, 2.4]});
  });
  it('check if number', function() {
    assert.deepEqual(keys(obj), 'number');
  });
});


/*

const assert = require('assert');
const groupBy = require('../groupBy');



  // Write tests here
describe('Number Array', function() {
let obj = groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
  it('Check Obj Return', function() {
assert.deepEqual(obj, {1: [1.3], 2: [2.1, 2.4]});
});
  it('Check Obj Key is Number', function() {
assert.deepEqual(Object.keys(obj), [ '1', '2' ]);
});
});

describe('String Array', function() {
let obj = groupBy(['one', 'two', 'three'], function(str) { return str.length; });
  it('Check Obj Return', function() {
assert.deepEqual(obj, {3: ["one", "two"], 5: ["three"]});
});
  it('Check Obj Key is Number', function() {
assert.deepEqual(Object.keys(obj), [ '3', '5' ]);
});
});

*/

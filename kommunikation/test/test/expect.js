let chai = require('chai');
let test = require('../test');
let expect = chai.expect;

let arr = [{
  foo: 2,
  bar: 4,
  var: 'hej',
}];

let result = {
  4: [{
    foo: 2,
     bar: 4,
     var: 'hej',
  }]
}

describe('check function', function(){
    it('function is woring', function() {
      let group = test.groupBy(arr, 'bar');
      expect(group).to.be.deep.equal(result);
      console.log(group);
});
});

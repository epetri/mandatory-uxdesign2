/*
Kopiera koden från länken och skriv tester för den. Skriv tre olika filer (med samma
tester om du vill) som använder de tre olika stilarna med hjälp av chai.js.
Minimum tester du bör/ska ha med:
● Testa att en tom array ger ett tomt objekt
● Testa att funktionen funkar
● Testa att flera objekt som har samma värde hamnar i samma grupp
● Testa att om ett objekt inte har nyckeln vi tror, då slängs ett fel

*/

let chai = require('chai');
let test = require('../test');

chai.should();

let result = [{
  foo: 2,
  bar: 4,
  var: 'hej',
}];

describe('emptyArray', function() {
  it('empty array is an empty obj', function(){
    let result = test.groupBy([], "");
    result.should.be.an('object');
    result.should.be.empty;

 });
});

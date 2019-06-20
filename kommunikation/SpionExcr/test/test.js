let sinon = require('sinon');
let script = require('../script');
let assert = require('assert');

/*
describe('spycheck', function(){
  it('returns true if spy was called at least once with the provided argument', function(){
    const spy = sinon.spy(script, 'setValue');

    script.increment(10);
    assert.equal(spy.calledWith(10), true);


  });
});

// För att köra testet i teminalen, skriv = 'npm test'

 viktors lösning  */

describe('script', function() {
  it('can increment', function(){
    script.setValue(5);   //ger setValue ett värde '5'
    assert.equal(script.getValue(), 5); // kontrollerar att getvalue har fått värde 5
    const spy =  sinon.spy(script, 'setValue'); //skapar en spy på funktionen setValue
    script.increment(7);  //ger increment ett värde '7'
    assert.equal(spy.callCount, 1); // kollar att setValue blir kallad 1 gång

    // Testen här under är olika sätt att kontrollera att 5+7 = 12 och se att funktionerna funkar 
    assert.equal(spy.getCall(0).args[0], 12); //option 1
    assert.equal(script.getValue(), 12); //option 2


  //  assert.equal(spy.args[0][0], 12);  option 3
  //  spy.calledWith(12);     option 4
  });
});

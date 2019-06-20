/*
Du ska skapa en funktion groupBy. Funktionen ska funka på följande sätt:
groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
// -> {1: [1.3], 2: [2.1, 2.4]}
groupBy(['one', 'two', 'three'], function(str) { return str.length; });
// -> {3: ["one", "two"], 5: ["three"]}
Innan du bygger funktionen, skriv ett par tester som testar funktionen. Försök att
komma på “edge cases” och testa dessa (t.ex tom array, eller andra exemplet fast
med nummer istället osv).

*/
debugger;
function groupBy(array, f) {
  debugger;
  let obj = {};
  for (let i of array) {
    debugger;
    let a = f(i);
    if(obj[a]){
      obj[a].push(i);
    } else {
      obj[a] = [i];
    }
  }
  console.log(obj);
  return obj;
}


groupBy([1.3, 2.1, 2.4], function(num){
  return Math.floor(num);
});

module.exports = groupBy;

function isBetween(x, from, to) {
  if (x > from && x < to) return true;
  return false;
}
console.log (isBetween (10, 0, 20));

function range(to, from) {

  var myArray = [];
  var i;
  for (i = to; i < from; i++){
    myArray.push(i);
  }
  return myArray;
}
console.log(range (3, 10));

function min(a, b) {
  if (a > b) {
    return b; }
  else {
     return a; }
}
console.log(min (20,10));

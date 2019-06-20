/* Write a function isBetween that takes three numbers as arguments.
x, from and to. Return if x is between from and to. */
function isBetween (x, from, to) {
  if (x > from && x < to){
    return x;
  } else {
    return false;
  }
}
console.log(isBetween(5, 0, 12));

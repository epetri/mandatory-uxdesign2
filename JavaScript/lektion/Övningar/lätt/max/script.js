/*Write a function max that takes two numbers as argument.
Return the largest number of the two. When you're done, write another function min
 that works the same, but instead returns the smallest number. */

function max(a, b){
  if(a < b){
    return b;
  } else {
    return a;
  }
}

function min(a, b){
  if(b > a){
    return a;
  } else {
    return b;
  }
}
console.log(max(8, 7));
console.log(min(4, 7));

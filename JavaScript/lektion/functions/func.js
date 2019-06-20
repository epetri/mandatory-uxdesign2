function double(x){
  return x * 2;
}
let a = double(10);
console.log(a);

function addFive(y){
  return y + 5;
}
let b = addFive(10);
console.log(b);

console.log(a, addFive(double(10)));
console.log(b, double(addFive(10)));

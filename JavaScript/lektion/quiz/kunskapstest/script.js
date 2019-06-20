// 1.summera alla tal mellan 0 - 12
let q = 0;
for(let i = 0; i <= 12; i++){
  q += i;
}
console.log(" 1 ",q);

//2.summera tal i en Array
let numbers = [2,99,47,32,5];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(" 2 ",sum);

//2b.lösning två
function add(x){
  let a = 0;
  for(let i = 0; i < x.length; i++){
    a += x[i];
  }
  return a;
}
console.log(" 2b", add([1,2,3,4,5,6,7,8,9,10,11,12]));

//3.summera bara tal över 10
let total = 0;
function myArray(num){
  for(let i = 0; i < num.length; i++){
    if(num[i] > 10){
      total += num[i];
    }
  }
  return total;
}
console.log(" 3 ", myArray([2,99,47,32,5]));

//4. summera tal under value nyckeln för varje objekt [{value:6}, {value:9}, {value:23}, {value:55}]
let myObj = [{value:6}, {value:9}, {value:23}, {value:55}];
var obj = myObj.reduce(function(prev, cur) {
  return prev + cur.value;
}, 0);


console.log(" 4 ",obj);

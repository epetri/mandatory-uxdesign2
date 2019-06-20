var myArray = [];
var i;
for (i = 0; i < 10; i++){
  myArray.push(i);
}
console.log(myArray);

for (i = 0; i <myArray.length; i++){
  myArray[i] *= 2;
}
console.log(myArray);

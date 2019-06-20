
//funktions chaneing
function doubleAndSumNumbersOver10(array){
  return array.filter((number) => {
    return number > 10;
  }).map((number, i, array) => {
    return number * 2;
  }).reduce((acc, val) => {
    return acc + val;
  });
}

console.log(doubleAndSumNumbersOver10([1, 5, 12, 44]));


//viktors lösning
function doubleAndSumNumbersOver10(array){
  let over10 = array.filter(function(x) {
    return x > 10;
  });
  let double = over10.map(function(x){
    return x * 2;
  });
  let sum = double.reduce(function(acc, x){
    return acc + x;
  }, 0);
  return sum;
}


let sum = doubleAndSumNumbersOver10([3, 7, 17, 45]);
console.log(sum);

//Big Arrow

function doubleAndSumNumbersOver10(array){
  return array.filter(x => x > 10)
  .map(x => x * 2)
  .reduce((acc, val) => acc + val);
}

console.log(doubleAndSumNumbersOver10([8, 10, 34, 65]));

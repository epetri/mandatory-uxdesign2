/*
1. Skapa en funktion max som tar en array med nummer som argument.
Funktionen ska returnera det största talet i arrayen. Använd inte Math.max.
T.ex. max([1, 2, 3]) // -> 3*/

function max(array){
  let number = null;
  for(let i = 0; i < array.length; i++) {
    if(array[i] > number){
      number = array[i];
    }
  }
  console.log(number);
}
max([1, 2, 3]);


// viktrs lösning

function max(myarr){
  let maxValue = myarr[0];
  for ( let i = 0; i< myarr.length; i++){
    let value = myarr[i];
    if ( value > maxValue) {
      maxValue = value;
    }
  }
  return maxValue;
}
console.log(max([1, 2, 3]));

/*
2. Skapa en funktion squareSum som tar en array med nummer som argument.
Funktionen ska returnera summan av alla nummer i kvadrat.
T.ex. squareSum([1, 2, 3]) // -> 1 + 4 + 9 = 14*/

function squareSum(arr){
  let value = [];
  let number = 0;
  for(let i = 0; i < arr.length; i++) {
     let sum = arr[i] *= arr[i];
     value.push(sum);
   }
   console.log(value);
   for(let x = 0; x < value.length; x++){
     number += value[x];
   }
   console.log(number);
 }

squareSum([1, 2, 3]);

//viktors lösning

function sqrSum(onearr) {
  let sum = 0;
  for ( let myValue of onearr) {
    let squared = Math.pow(myValue, 2);    // funkar även med value * value
    sum += squared;
  }
}

console.log(sqrSum([1, 2, 3]));

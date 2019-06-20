function lessThan10(myArray) {
  let newArray = [];
  for (let i = 0; i < myArray.length; i++){
    if ( myArray[i] < 10) {
      let number = myArray[i];
      newArray.push(number);
    }
  }
  return newArray;
}

console.log(lessThan10([1, 2, 4, 8, 16, 32]));
 

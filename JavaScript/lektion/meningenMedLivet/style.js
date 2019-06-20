function searchForMeaning (myArray) {
  for (let number = 0; number < myArray.length; number++) {
    if (myArray[number] === 42){
      return "meaning found at " + number;
    }
  }
  return "not found."
}
console.log(searchForMeaning([7, 42, 32, 99]));
console.log(searchForMeaning([7, 77, 42, 32, 99]));
console.log(searchForMeaning([7, 32, 99]));

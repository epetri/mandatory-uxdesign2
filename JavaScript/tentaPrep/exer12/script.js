/*I script.js skapa en funktion mostCommonWord som tar en sträng som argument.
Funktionen ska returnera det ordet som förekom flest gånger i strängen.*/


/* Implement your solution here */
debugger;
function mostCommonWord(string) {
  let mostCommon = '';
  let myString = {};
  let stringArr = string.split(' ');
  for(let i = 0; i < stringArr.length; i++) {
    let value = stringArr[i];
    if(myString[value]) {
      myString[value] = myString[value] + 1;
    } else {
      myString[value] = 1;
    }
  }
  for(let takOut in myString) {
    debugger;
    mostCommon = myString[takOut];
    if(mostCommon < myString[takOut].length){
      mostCommon[takOut] = myString[takOut].length
    } else {


    }
  }
}

/* Do not touch anything below this line */
if (mostCommonWord('Hello this is a text that is cool and stuff') !== 'is') console.error('Invalid solution');
else console.log('Solved!');

console.log(mostCommonWord('Hello this is a text that is cool and stuff'));

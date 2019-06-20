/*Skapa en funktion wordCount som tar en sträng som argument. Räkna hur många
av varje ord som finns i strängen och returnera ett objekt som har alla ord i sina
nycklar, och hur många av varje ord det fanns som värde*/

function wordCount(fruits) {
  let myFruits = {}
  let fruitArr = fruits.split(" ");
  for ( let i = 0; i < fruitArr.length; i++) {
    let value = fruitArr[i];
    if (myFruits[value]) {
      myFruits[value] = myFruits[value] + 1;
    } else {
      myFruits[value] = 1;
    }
  }
  return myFruits;
}

console.log(wordCount("banana melonas carrot banana melonas"));

/*Skapa en funktion mostCommonWord som tar en sträng som argument. Räkna hur
många av varje ord som finns i strängen och returnera det ord som är vanligast.*/

function mostCommonWord(colors) {
  let myColors = wordCount(colors);
  let word;
  let currentVal = 0;
  for (let key in myColors){
    let value = myColors[key];
    if (value > currentVal){
      currentVal = value;
      word = key;
    }
  }
    return "Quantity: " + currentVal + " color: " + word;
}
console.log(mostCommonWord("red red red red blue blue blue yellow"));

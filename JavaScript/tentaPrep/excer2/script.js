/*Skriv en funktion longestWord som tar en sträng som argument. Funktionen ska returnera det ord i strängen som har flest bokstäver.*/

function longestWord(string) {
  let strSplit = string.split(' ');
  saveLongestWord = '';

  for(let word of strSplit){
    if(word.length > saveLongestWord.length){
      saveLongestWord = word;
    }
  }
  return saveLongestWord;
}

console.log(longestWord('The quick brown fox jumped over the lazy dog'));

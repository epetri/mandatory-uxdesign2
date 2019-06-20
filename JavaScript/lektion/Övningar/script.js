/*Skriv en funktion longestWord som tar en sträng som argument. Funktionen ska returnera det ord i strängen som har flest bokstäver.*/

function longestWord(string){
  let words = string.split(' ');
  let save = '';

  for(let word of words){
    debugger;
    if(word.length > save.length){
      save = word;
    }
  }
  return save;
}

console.log(longestWord('nej de görrrr de inte'));

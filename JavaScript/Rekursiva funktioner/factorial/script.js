/*Skriv en funktion factorial som tar ett nummer som argument. Funktionen ska
returnera fakulteten för ett nummer. Lös övningen med en rekursiv funktion.*/

function factorial(number) {
  if(number === 0) {
    return 1;
  }
  return factorial(number-1) * number;
}


console.log(factorial(3));

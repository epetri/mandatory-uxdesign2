/* Skapa tre olika funktioner som skriver ut varsitt meddelande till konsolen. Anropa
dessa tre funktionerna efter varandra, men lägg till en sekunds delay mellan varje
anrop. */

function delayedF1(){
  console.log("text 1");

}
setTimeout (delayedF1, 1000);

function delayedF2(){
  console.log("text 2");

}
setTimeout (delayedF2, 3000);

function delayedF3(){
  console.log("text 3");

}
setTimeout (delayedF3, 5000);

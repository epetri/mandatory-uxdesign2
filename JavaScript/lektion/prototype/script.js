/*Skapa en funktion doubleAll som tar en array som argument. Den ska returnera
en ny array som innehåller alla värden från argument arrayen multiplicerat med två.
Använd Array.prototype.map för att lösa problemet.
Svårare version: Lös samma problem fast med Array.prototype.reduce istället
*/


let doubleAll = [1, 2, 3];
doubleAll = doubleAll.map(function(x){
  return x * 2;
});

console.log(doubleAll);



let add = [1, 2, 3];
let sum = add.reduce(function(accumulator,  currentValue) {
  return accumulator + currentValue;
} );

console.log(sum);

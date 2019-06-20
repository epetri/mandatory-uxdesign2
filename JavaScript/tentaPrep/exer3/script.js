/*Skriv en funktion renderOrderedList som tar en array som argument.
 Arrayen innehåller strängar. Du ska rendera alla värden i en ordnad lista under main elementet i index.html.*/

 let main = document.querySelector('main');
 let ol = document.createElement('ol');
  main.appendChild(ol);

 function renderOrderedList(array){
   let string = '';
   for (let str in array){
     string = array[str];

     let li = document.createElement('li');
     li.textContent = string;

     ol.appendChild(li);
   }
 }

renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"])

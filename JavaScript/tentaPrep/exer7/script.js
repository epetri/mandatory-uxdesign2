/*I index.html ligger det ett input-fält.
Du ska skriva kod så att om man skriver in en färg i fältet (T.ex. "red" eller #FF0000)
så ska du ändra bakgrundsfärgen på .container elementet till att vara den färgen vi har skrivit in.*/

let input = document.querySelector('#color');
let div = document.querySelector('.container');

input.addEventListener('change', function(event){
  div.style.backgroundColor = input.value;
})

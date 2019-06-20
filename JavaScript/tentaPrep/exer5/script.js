/*I index.html ligger det två knappar och en box.
När vi trycker på en av knapparna ska boxen antingen röra sig 10 pixlar åt vänster eller höger från sin nuvarande position.
Lägg på eventlyssnare på knapparna och lös problemet.*/

let left = document.querySelector('#left');
let right = document.querySelector('#right');
let box = document.querySelector('#box');
box.style.position = 'relative';

left.addEventListener('click', function(event){
position = parseInt(box.style.left) || 0;
box.style.left = position + -10 + 'px';
});

right.addEventListener('click', function(event){
  position = parseInt(box.style.left) || 0;
  box.style.left = position + 10 + 'px';
})

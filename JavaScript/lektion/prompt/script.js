/*Återskapa prompt funktionen själv. Din egna funktion ska själv rendera ett
popup-fönster där det meddelandet vi anger till funktionen ska visas. Det ska också
finnas ett input fält där vi kan skriva in ett svar. Din funktion ska returnera värdet vi
har angett i input fältet. Notera att du måste returnera värdet med en callback eller
promise.*/

let div = document.querySelector('div');
let input = document.querySelector('input');
let button = document.querySelector('button');
let h4 = document.querySelector('h4');
let h2 = document.querySelector('h2');

function popUp(){
  div.style.display = "block";
}

function showAnswer(){
  let answer = input.value;
  console.log(answer);
  h2.textContent = answer;
}

function prompt(string){
  h4.textContent = string;
  return new Promise(function(resolve, reject) {
    button.addEventListener('click', function onClick() {
      button.removeEventListener('click', onClick);
      div.style.display = 'none';
      resolve(input.value)
    });
    input.value = '';
  popUp();
});
}

setTimeout(function(){
  prompt('Enter your age')
  .then(function(answer) {
    console.log('yor age is: ', answer);
    return prompt('and name plx');
  })

  .then(function(name){
    console.log('your name is: ', name);
  })
}, 1000);

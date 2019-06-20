/*Write a function contains that takes two arguments.
The first should be an array, and the second one should be a value of any type.
The function should return whether the second argument exists inside the array.*/

function contains(array, other){
  for(let i of array){
    if(i === other){
      console.log(('true'));
    }else if(i !== other){
      console.log('false');
    }
  }
}

contains(["dog", "cat"], "cat");
contains(["banana", "carrot"], "orange");







/*
function ButtonCount() {
  debugger;
let button = document.createElement('button');
document.body.appendChild(button);
let i = 0;
button.textContent = i;
button.addEventListener('click', function() {
  debugger;
i++;
button.textContent = i;
});
}
new ButtonCount();
new ButtonCount();
*/

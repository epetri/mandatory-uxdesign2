let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let button;
for(let i = 0; i < buttons.length; i++){
  button = buttons[i];
  button.addEventListener('click', onClick);
}

function onClick(e) {
  debugger;
  let clickedButton = e.target;
  let buttonValue = clickedButton.innerText;
  display(buttonValue);
}

function display(x){
  debugger;
  let newItem = document.createElement("p");
  newItem = x;
  input.value = newItem, newItem;
}



  /*let field = document.querySelector(".container #field");
  console.log(field.value);




  if (text === "red") {
    container.style["color"] = "white";
  }  else {
    container.style["color"] = "black";
  }
}

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', onClick);
}*/

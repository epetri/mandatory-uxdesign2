let input = document.querySelector('input');

let button = document.querySelector('button');
button.addEventListener('click', onClick)

function onClick(){
  let value = parseInt(input.value);
  let number = new countdown(value);
  number.decrease();
  }


function countdown(value){

  let field = document.createElement('input');
  let butt = document.createElement('button');
  let h2 = document.createElement('h2');
  document.body.appendChild(h2);
  document.body.appendChild(input);
  document.body.appendChild(button);


  this.number = value;
  this.decrease = function (){
  for (let countdown = this.number; countdown >= 0; countdown --){
    setTimeout(function(){

      h2.textContent = countdown;
      }, (this.number - countdown) * 1000);
    }
  }
}

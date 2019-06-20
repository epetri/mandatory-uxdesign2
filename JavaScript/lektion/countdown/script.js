let input = document.querySelectorAll('input');
let button = document.querySelector('button');
button.addEventListener('click', onClick)

function onClick(){
  let p = document.createElement('p');
  let value = parseInt(input.value);

  for (let countdown = value; countdown >= 0; countdown --){
    setTimeout(function(){
      p.textContent = countdown;
      document.body.appendChild(p);
    }, (input.value - countdown) * 1000);
  }
}

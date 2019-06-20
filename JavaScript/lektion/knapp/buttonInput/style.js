function onClick(e){
  var element = e.target;
  if (element === myButton){
    console.log(myButton.textContent);
  } else {
    myButton.textContent = input.value;
  }
}

var myButton = document.querySelector('button');
myButton.addEventListener('click', onClick);

var input = document.querySelector('input');
input.addEventListener('input', onClick);

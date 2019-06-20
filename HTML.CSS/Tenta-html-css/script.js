function onClick(e){
  console.log("Hello World!");
}

var myButton = document.getElementById('problem6abutton');
myButton.addEventListener('click', onClick);

var helloWorld = document.createElement('p');
helloWorld.textContent ='Thinking outside the box...';

var div6 = document.getElementById('problem6b');

div6.appendChild(helloWorld);

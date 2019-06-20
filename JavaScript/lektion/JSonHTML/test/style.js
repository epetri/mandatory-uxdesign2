
//alert ('Hello world');

//Append a p element with the text "Hello world" to the document body
var helloWorld = document.createElement('p');
helloWorld.textContent ='Hello world';
document.body.appendChild(helloWorld);

//Change text of an existing p element
var changeTxt = document.querySelector('p');
changeTxt.textContent = 'hejhej';

//Change css of an existing createElement
var css = document.querySelector('h1');
css.setAttribute('style', 'color:red;');

//Change the tag of an existing element
var tagOne = document.querySelector('h2');
var tagTwo = document.createElement('h4');
tagTwo.innerHTML = tagOne.innerHTML;
tagOne.parentNode.replaceChild(tagTwo, tagOne);

//Extract value from input fields
var inputArray = document.querySelectorAll('input');
var arr =[];
for (var i = 0; i < inputArray.length; i++){
  var inputValue = inputArray[i].value;
  arr.push(inputValue);
}
console.log(arr);

//Listen on button click and do an alert as a response
var button = document.querySelector('button');
function onClick (e){
  var element = e.target;
  if (element === button){
    alert('U clicked');
  }
}
button.addEventListener('click', onClick);

//Extract all links of a DOM page to an array
var linkArray = document.querySelectorAll('a');
var arr = [];
for (var i =0; i<linkArray.length; i++) {
  var toArray = linkArray[i].getAttribute('href');
  arr.push(toArray);
}
console.log(arr);

//Iterate an array of values (for example links) and append seperate DOM elements to document body
for (var i = 0; i<arr.length; i++){
   var element = document.createElement('a');
   element.textContent = arr[i];
   document.body.appendChild(element);
   element.setAttribute('href', arr[i]);
}

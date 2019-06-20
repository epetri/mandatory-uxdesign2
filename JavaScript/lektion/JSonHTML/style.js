

var one = document.getElementsByTagName('p');
  for(var i =0; i< one.length; i++){
    one[i].setAttribute('style', 'color:red;');
  }

var hi = document.getElementById('hi');
  hi.setAttribute('style', 'color:blue;');

var cre8 = document.createElement('p');
  cre8.textContent = 'Detta är en text skapad ur JS';
  document.body.appendChild(cre8);

var x= 10 ;
  console.log(33*9991);
  console.log(x-x/2);
  console.log(1337/567);
  console.log(x*x);
  console.log(x+5*x);

var x = 5;
if (x===3){
  console.log("värdet är samma");
} else {
  console.log("värdet är inte 3");
}

/*Skriv en loop som skriver ut “Hello, World!” 20 gånger*/
for (var i=0; i<=20; i++){
  console.log("hello world");
}

/*Skriv en loop som summerar alla tal mellan 0 och 100. Vad är resultatet?*/
sum = 0;
for(var i =0; i <=100; i++){
  sum += i;
}
  console.log(sum);

/*Skriv en loop som summerar alla jämna tal mellan 0 och 100. Vad är resultatet?*/
  sum = 0;
  for(var i =0; i <=100; i += 2){
    sum += i;
  }
    console.log(sum);

/*Skriv en loop som summerar alla jämna tal mellan 0 och 100. Vad är resultatet?*/
  sum = 0;
    for(var i =1; i <=100; i += 2){
      sum += i;
    }
        console.log(sum);

/*Skriv en loop som summerar alla tal mellan 0 och 100 förutom de tal som är
jämnt delbara med 10 (10, 20, 30, …)*/

  sum = 0;
  for(var i = 0; i<100; i++){
    if (i % 10 === 0) continue;
    sum += i;
  }
    console.log(sum);

/*Skapa en Array som innehåller alla tal mellan 0 och 100
Tips: Använd en for-loop och push()*/

var myArray = [];
for (var i = 0; i <= 100; i++){
  myArray.push(i);
}
console.log(myArray);

/*Skriv en loop som loopar igenom en Array och multiplicera alla värden med 2.
T.ex [0, 1, 2, 3] blir [0, 2, 4, 6]*/
for (var i =0; i<myArray.length; i++){
  myArray[i] *=2;
}
  console.log(myArray);

/*Skriv en funktion isBetween(x, from, to) som returnerar true om x ligger mellan to
och from och annars returnerar false
isBetween(10, 0, 20); // true */

function isBetween (x, from, to){
  if(x<to || x>from){
    return true;
  } else {
    return false;
  }
}





/*
var fuckdiz = document.getElementsByClassName('one');
  for (var i=0; i<fuckdiz.length; i++){
    fuckdiz[i].setAttribute('style', 'background-color:red;');
  }
  var andDiz = document.getElementsByClassName('two');
    for (var i=0; i<andDiz.length; i++){
      andDiz[i].setAttribute('style', 'background-color:blue;');
    }


var myDiv = document.getElementById('myDiv');
 var  fruits= myDiv.getElementsByTagName('p');
  for (var i = 0; i<fruits.length; i++) {
    fruits[i].setAttribute('style', 'color: red;');
  }

var div = document.getElementsByClassName('div');
  var apple = div.getElementsByTagName('span');
  for (var i = 0; i<apple.length; i++){
    apple[i].setAttribute('style','color: blue;');
  }


var pTagg = document.getElementsByTagName('p');
  for (var i=0; i<pTagg.length;i++){
    pTagg[i].setAttribute('style', 'background-color:red;');
  }*/

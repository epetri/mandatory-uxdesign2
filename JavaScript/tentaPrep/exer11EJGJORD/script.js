/*I Html filen ligger det en röd box med klassen .sticky.
Du ska göra så boxen funkar som att den hade haft position: sticky satt på sig.
Du får enbart lägga till position: absolute på boxen genom JS (inte position: fixed).
Boxen ska fungera som en vanlig div när vi scrollar på sidan,
men när toppen av boxen nuddar toppen av webbläsarefönstret så ska boxen nu hänga
med när vi scrollar.*/

let redBox = document.querySelector('.sticky');

window.onscroll = function () {
  console.log(document.body.offsetTop);
  if(redBox === document.body.offsetTop <= 0){
    redBox.style.position = 'absolute';
    redBox.style.top = '0px';
    redBox.style.left = '0px';
  } else {

  }
}

/*



window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}
*/

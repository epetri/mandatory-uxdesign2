//ber om ursäkt för min felstavning, det ska såklart stå which- och inte witch... och alla andra problem du kan stöta på

let h3 = document.querySelector('h3');
let answersDiv = document.querySelector('#answers');
let nextButton = document.querySelector('#next');
let prevButton = document.querySelector('#previus');
let popUp = document.querySelector('#popup');
let closePopup = document.querySelector('#closePopup');
let ol = document.createElement('ol');
let parsed = [];
let witchQuestion = 0;

answersDiv.appendChild(ol);
nextButton.addEventListener('click', nextQuest);
prevButton.addEventListener('click', prevQuest);
//radioButt.addEventListener('click', checkAnswer);

function getFromServer(){  //Skapa en funktion som hämtar information från the cloud
  let getRequest = new XMLHttpRequest();
  getRequest.addEventListener('load', respons); //när datan har hämtats, kör funktion respons
  getRequest.open('GET', 'https://opentdb.com/api.php?amount=10&difficulty=easy');
  getRequest.send();
}

function respons(){ //denna funktion omvandlar datan som kommer som en sträng, till ett objekt
  parsed = JSON.parse(this.responseText);
  console.log(parsed);
  console.log(this.status);
  addQuestion();
}

function addQuestion(){  // tar parsed in i funktionen
  ol.innerHTML = '';
  let question = parsed.results[witchQuestion]; //hämtar ut frågorna från parsedObjektet
  console.log(question);
  h3.innerHTML = question.question;
  addAnswers(question);
}

function addAnswers(question){  //vi skickar vidare question för att få ut rätt svar som är kopplade till frågan
  let answers = question.incorrect_answers; //hämtar fel svarsalternativ, kommer som en array
  let right = question.correct_answer; //hämtar ut det rätta svaret
    answers.push(right); //pushar in det rätta svaret i arrayn med de felaktifa svarsalternativen

    answers = shuffle(answers); //skickar in arrayn med svaren i shuffle funktionen där de rörs om så svaren inte ligger i samma ordning hela tiden

  for(let i in answers){  //lägger svarsalternativen i en lista
    let li = document.createElement('li');
    li.textContent = answers[i];
    ol.appendChild(li);

    let radioButt = document.createElement('input'); //skapar en radiobutton efter svaren
    radioButt.setAttribute('type', 'radio');
    radioButt.setAttribute('name', 'chosen');
    li.appendChild(radioButt);
  }
}

function shuffle(a) { //shufflefunktionen blandar svarsalternativen
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function nextQuest(){
  if( witchQuestion < parsed.results.length){
    addQuestion();
    witchQuestion++;

  }
}

function prevQuest(){
  if( witchQuestion > 0){
    witchQuestion--;
    addQuestion();
  }
}

/*function checkAnswer(){
  if()
}*/




getFromServer();

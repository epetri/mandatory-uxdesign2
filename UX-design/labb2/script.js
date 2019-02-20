const startButton = document.querySelector('.start-quiz-button');
const questionContainer = document.querySelector('.Qcontainer');
const main = document.querySelector('main');
let parsed = [];
let submit;
let radiobutton;


startButton.addEventListener('click', getQuestions);

function getQuestions() {
  startButton.setAttribute('style', 'display: none');
  let getRequest = new XMLHttpRequest();
  getRequest.addEventListener('load', respons);
  getRequest.open('GET', 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
  getRequest.send();
}

function respons() {
  parsed = JSON.parse(this.responseText);
  addQuestion();
}

function addQuestion() {
  main.innerHTML = '';
  let count = 0;

  for (question of parsed.results){
    count++;
    ul = document.createElement('ul');
    ul.className = 'questions';

    let label = document.createElement('label');
    label.textContent ='Q'+ count + '. ' + question.question;
    ul.appendChild(label);
    questionContainer.appendChild(ul);

    let answers = question.incorrect_answers;
    let rightAnswer = question.correct_answer;
    answers.push(rightAnswer);
    answer = shuffle(answers);

    for(let i in answers) {
      let li = document.createElement('li');
      li.textContent = answers[i];
      ul.appendChild(li);

      radiobutton = document.createElement('input');
      radiobutton.className = 'radiobutton';
      radiobutton.setAttribute('type', 'radio');
      radiobutton.setAttribute('name', 'chosen'+count);
      radiobutton.setAttribute('correctAnswer', answers[i] === question.correct_answer);
      li.appendChild(radiobutton);
    }
  }
  createSubmit();
}

function createSubmit(){
  let submitButton = document.createElement('button');
  submitButton.className = 'submitButton';
  submitButton.textContent = 'Submit';
  main.appendChild(submitButton);
  submitButton.addEventListener('click', submitAnswer);
}

function submitAnswer(){
  let popupShadow = document.createElement('div');
  popupShadow.className = 'popUp-shadow';
  let popUp = document.createElement('div');
  popUp.className = 'popUp';

  let closeX = document.createElement('button');
  closeX.className = 'closePopup';
  closeX.textContent = 'close';
  popUp.appendChild(closeX);
  closeX.addEventListener('click', function() {
    popupShadow.setAttribute('style', 'display: none;')
  });

  let restartButton = document.createElement('button');
  restartButton.className = 'restartButton';
  restartButton.textContent = 'restart quiz';
  popUp.appendChild(restartButton);
  restartButton.addEventListener('click', function(){
    popupShadow.setAttribute('style', 'display: none');
    getQuestions();
  });

  popupShadow.appendChild(popUp);
  main.appendChild(popupShadow);

  let correct = 0;
  let radioButtons = document.querySelectorAll('input[type="radio"]:checked');
  for (let radioButton of radioButtons){
    if(radioButton.getAttribute('correctAnswer') === 'true'){
      correct++;
    }
  }
  let h1 = document.createElement('h1');
  h1.className = 'submit-text';
  h1.textContent = correct + '/10';
  popUp.appendChild(h1);
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

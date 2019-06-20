let radioButt = document.querySelectorAll('input[name="dot"]');
let button = document.querySelector('button');
let h3 = document.querySelector('h3');
let popUp = document.querySelector('#popUp');

let currentQuestion = 0;
let myQuestions = [
  'Do you like NOCCO?',
  'Do you like pinapple?',
  'Do you like Joanna?',
  'Do you like iceCream?',
];

function addQuestion(){
  h3.textContent = myQuestions[currentQuestion];
  clearRadio();
  lastQuestion();

  if(currentQuestion < myQuestions.length){
    currentQuestion++;
  }
}

let arrayOfResults = [];

function clearRadio(){
  let saveResult = 0;
  for( let i = 0; i < radioButt.length; i++){
    if(radioButt[i].checked){
      saveResult = radioButt[i].value;
      arrayOfResults.push(saveResult);
      radioButt[i].checked = false;
    }
  }
}

function nextQuestion(){
  button.addEventListener('click', addQuestion);
}

function lastQuestion(){
  if(currentQuestion === myQuestions.length -1){
    button.textContent = 'show result!';
    button.removeEventListener('click', addQuestion);
    button.addEventListener('click', function (){
      addQuestion();
      showResult();
    });
  }
}

function showResult(){
  let result;
  let questions;
  for (let i = 0; i < myQuestions.length; i++) {
    result = arrayOfResults[i]
    questions = myQuestions[i];
    console.log(result, questions);
    let p = document.createElement('p');
    p.textContent = questions + result;
    popUp.appendChild(p);
    popUp.setAttribute('style', 'display: block');
  }
}


addQuestion();
nextQuestion();

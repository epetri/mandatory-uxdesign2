let h4 = document.querySelector('h4');
let checkbox = document.querySelector('input');


function countVisit() {
  let count;
  let str_count = localStorage.getItem('count');
  if(str_count === null || str_count === 'null'){
    count = 0;
  }else {
    count = parseInt(str_count);
  }
  count++;
  h4.innerHTML = 'You have been here ' + count + ' times';
  localStorage.setItem('count', count);
}

/*
Andreas lösning

const visits= parseInt(localStorage.getItem('visit') || '0') +1);
const span = document.createElement('span');
span.textContent = 'du har besökt sidn ${visits} gånger';
document.body.appendChild(span);
localStorage.setItem('visits', visits.toString());
*/

countVisit();

/*
Andreas lösning checkbox

const checked = (localStorage.getItem('checked') || 'false') === 'true';
const checkbox = document.querySelector('input');
checkbox.checked = checked;

checkbox.addEventListener('change', (event) => {
  localStorage.setItem('checked', event.target.checked.toString());
});
*/


function getStatus(){                                          //Ge localstorage ett värde
  let boxState = localStorage.getItem('checkbox');
  checkbox.checked = boxState;
}

function setCheckBox(){                                        //ändra värdet
  if(!checkbox.checked){
    let checkStatus = '';
    localStorage.setItem('checkbox', checkStatus);
  } else {
    checkStatus = 'checked';
    localStorage.setItem('checkbox', checkStatus);
  }
}

getStatus();
checkbox.addEventListener('click', setCheckBox);

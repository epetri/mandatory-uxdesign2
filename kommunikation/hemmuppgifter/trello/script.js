//=============================== Filip ===============================
let parentDiv = document.querySelector('.lists-container');
let count = 0;
let itemContainer;

let addListDiv =  document.createElement('div');
addListDiv.classList.add('lists-container__list');

let input = document.createElement('input');
input.classList.add('add-new-list-input');
input.placeholder = 'Add title name';
input.setAttribute("type", "text");

let button = document.createElement('button'); //add new list button
button.classList.add('lists-container__add-list-button');
button.textContent = 'Add new list';
let lists = []; // {id: count, title: str}
function makeList(str) {
  itemContainer = document.createElement('div');
  itemContainer.classList.add('itemContainer');
  itemContainer.style.width = '300px';
  itemContainer.style.height = 'auto';
  let div = document.createElement('div');
  div.classList.add('lists-container__list', "list" + count++);

  let addItemButton = document.createElement('button');

  addItemButton.textContent = 'Add item';
  addItemButton.classList.add('lists-container__button');
  addItemButton.addEventListener('click', function(e){
    createItem(e);
  });
  let a = document.createElement('a');
  a.href = '#';
  a.classList.add('boxclose', count);

  let title = document.createElement('p');
  title.classList.add('list-title');
  let inputVal;
  if (typeof str === 'string') {
    title.textContent = str;
    lists.push({id: count, title: str});
  } else {
    inputVal = input.value;
    title.textContent = inputVal;
    lists.push({id: count, title: input.value});
  }
  a.addEventListener('click', (e) => {
    e.stopPropagation();
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].title === inputVal || lists[i].title === str) {
        lists.splice(i, 1);
      }
    }
    a.parentNode.remove(div);
  });
  parentDiv.appendChild(div);
  div.appendChild(addItemButton);
  div.insertBefore(itemContainer, div.firstChild);
  div.appendChild(a);
  div.appendChild(title);
  addList();
}
function addList() { //appendar om add list container till sista ledet
  input.value = '';
  addListDiv.appendChild(button);
  addListDiv.appendChild(input);
  parentDiv.appendChild(addListDiv);
  button.addEventListener('click', makeList);
}

makeList('To do');
makeList('In progress');
makeList('Done');

//====================================Emma=======================================
//FUNKTION SOM SKAPAR ETT NYTT ITEM

function createItem(e){

  let save = e.target.parentNode.querySelector('.itemContainer');

  let item = document.createElement('div');                   //Skapa hela diven
  item.className = 'newItem';

  let textarea = document.createElement('textarea');          // Skapar textarea att fylla i
  textarea.className = 'textarea';
  textarea.setAttribute('maxlength', '30');
  textarea.setAttribute('style', 'resize: none;')

  let time = document.createElement('h5');                    //Sätter tid på nya diven
  time.className = 'time';
  let date = new Date();
  time.textContent = date.toLocaleString('sv-SE');
  item.appendChild(time);

  let checkMark = document.createElement('a');            // Skapar en OK knapp
  checkMark.className = 'checkMark';
  checkMark.innerHTML = '<i class="material-icons">done</i>'

  checkMark.addEventListener('click', function(e){                //Skapa funktion till ok knappen för att sätta titel
    e.stopPropagation();
    textarea.setAttribute('style', 'display: none;');

    let textareaValue = document.createElement('h4');
    textareaValue.className = 'textareaValue';

    if(textarea.value === ""){
      textarea.setAttribute('style', 'border: 1px solid red; resize: none;');
      textarea.placeholder = 'You forgot to write something';
      checkMark.setAttribute('style', 'display: block;');

    } else if(typeof textarea.value === 'string'){
      let itemTitle = textarea.value;
      let itemTitleCapitalized = itemTitle.charAt(0).toUpperCase() + itemTitle.slice(1);
      textareaValue.textContent = itemTitleCapitalized;
      item.appendChild(textareaValue);
      checkMark.setAttribute('style', 'display: none;');
      //=============================== Ayumi ===============================
      if(item.lastChild.textContent){
        item.addEventListener("click", () => displayPopUp(item));
      }
    }
    //=============================== Emma ===============================
  });

  let removeItemButton = document.createElement('button');
  removeItemButton.className = 'removeItemButton';
  removeItemButton.textContent = 'X';

  removeItemButton.addEventListener('click', function(e){
    e.stopPropagation();
    item.remove(e.target);
  });

  item.appendChild(checkMark);
  item.appendChild(textarea);
  item.appendChild(removeItemButton);
  save.appendChild(item);
}

//=============================== Ayumi ===============================
const popupButton = document.querySelector('.popup-button');
const popup = document.querySelector(".popup");
const popupName = document.querySelector(".popup-items__name");
const itemDescription = document.querySelector(".popup__textarea__description");
const close = document.querySelector("#close");
const commentField = document.querySelector('.popup__textarea__comments');
let control = null;

//Display pop-up on clicking an item
function displayPopUp(item) {

  if (control) {
    moveto.removeEventListener("change", control);
  }

  //Item title displayed on top of pop-up
  popup.style.display = "block";
  popupName.textContent = item.querySelector(".textareaValue").textContent;


  //Create drop-down list for existing lists
  let dropdown = document.querySelector(".moveto__dropdown");
  while(dropdown.childNodes.length > 2) {
      dropdown.removeChild(dropdown.lastChild);
  }

  for(let list of lists) {
    let selection = document.createElement("option");
    selection.textContent = list.title;
    document.querySelector(".moveto__dropdown").appendChild(selection);
  }

  control = () => {
    moveItem(item);
  }

  moveto.addEventListener("change", control);
}

//Move item to selected list
function moveItem(item) {
    item.remove();
    for(let i = 0; i < lists.length; i++) {
      if(lists[i].title === moveto.value) {
        document.querySelector(".list" + (lists[i].id-1)).firstChild.appendChild(item);
      }
    }
  };

const moveto = document.querySelector(".moveto__dropdown");
moveto.addEventListener("change", moveItem);

popupButton.addEventListener('click', function(item){
  console.log(item.target.parentNode.parentNode);

  let targetItem = item.target;
//  closePopUp();

  let commentDiv = document.createElement('div');
  commentDiv.className = 'commentDiv';

  let time = document.createElement('h6');                    //Sätter tid på nya comment diven
  time.className = 'time';
  let date = new Date();
  time.textContent = date.toLocaleString('sv-SE');
  commentDiv.appendChild(time);

  let p = document.createElement('p');
  p.className = 'comments';
  p.textContent = commentField.value;

  commentDiv.appendChild(p);
  popup.appendChild(commentDiv);
});

//Close pop-up
function closePopUp() {
  popup.style.display = "none";
}
close.addEventListener("click", closePopUp);

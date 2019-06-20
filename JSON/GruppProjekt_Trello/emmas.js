//=============================== Filip ======================================
let parentDiv = document.querySelector('.lists-container');
let count = 0;
let button = document.createElement('button');
let div;
let listcont;

function makeList() {
    div = document.createElement('div');
    div.classList.add('lists-container__list', count++);
    //div.textContent = `id: ${count}`;

    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttonDiv';

    listCont = document.createElement('div');
    listCont.className = "listCont";

    let addItemButton = document.createElement('button');
    addItemButton.textContent = 'Add item';
    addItemButton.classList.add('lists-container__button', count);

    addItemButton.addEventListener('click', function(e){
     textarea.value = "";
     textarea.style.border = '1px solid black';
     createItem(e);
   });

    let a = document.createElement('a');
    a.href = '#';
    a.classList.add('boxclose', count);
    a.addEventListener('click', () => {
        a.parentNode.remove(div);
    });

    div.appendChild(listCont);
    parentDiv.appendChild(div);
    buttonDiv.appendChild(addItemButton);
    div.appendChild(buttonDiv);
    div.appendChild(a);
    addList();

}
function addList() {
button.classList.add('lists-container__add-list-button');
button.textContent = 'Add new list';
button.addEventListener('click', makeList);
parentDiv.appendChild(button);
}
makeList();
makeList();
makeList();

//====================================Emma=======================================
    let cancelButton = document.querySelector('.add-item-popup__cancel');
    let addButton = document.querySelector('.add-item-popup__add');
    let textarea = document.querySelector('.add-item-popup__testarea');
    let addItem = document.querySelector('.add-item');

    //POPUPEN KAN STÄNGAS NER

    cancelButton.addEventListener('click', function(){
      addItem.style.display = 'none';
    });

    //PUPUPEN ADD ITEM, KALLAR PÅ FUNKTION

    addButton.addEventListener('click', function(){
      if(textarea.value === ""){
        textarea.placeholder = 'You forgot to write something';
        textarea.style.border = '2px solid red';
      } else {
        addItem.style.display = 'none';
        createItem();
      }
    });

    //FUNKTION SOM SKAPAR ETT NYTT ITEM SOM LÄGGS TILL I DIVEN

    function createItem(e){
      let save = e.target.parentNode.parentNode.firstChild;

      let item = document.createElement('div');                   //Skapa hela diven
      item.className = 'newItem';

      let time = document.createElement('h5');                    //Sätter tid på nya diven
      time.className = 'time';
      let date = new Date();
      time.textContent = date.toLocaleString('sv-SE');
      item.appendChild(time);

      let textarea = document.createElement('textarea');          // Skapar textarea att fylla i

      let checkMark = document.createElement('a');            // Skapar en OK knapp
      checkMark.className = 'checkMark';
      checkMark.innerHTML = '<i class="material-icons">done</i>'
      console.log(checkMark);

    checkMark.addEventListener('click', function(){                //Skapa funktion till ok knappen för att sätta titel
      textarea.setAttribute('style', 'display: none;');

      let textareaValue = document.createElement('h4');
      textareaValue.className = 'textareaValue';
      let itemTitle = textarea.value;
      let itemTitleCapitalized = itemTitle.charAt(0).toUpperCase() + itemTitle.slice(1);
      textareaValue.textContent = itemTitleCapitalized;
      item.appendChild(textareaValue);
      checkMark.setAttribute('style', 'display: none;');
    });



      let removeItemButton = document.createElement('button');
      removeItemButton.className = 'removeItemButton';
      removeItemButton.textContent = 'X';

      removeItemButton.addEventListener('click', function(e){
        item.remove(e.target);
      });

      item.appendChild(checkMark);
      item.appendChild(textarea);
      item.appendChild(removeItemButton);
      save.appendChild(item);
    }

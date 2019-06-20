
pageNumber = 1;           //skapar variabeln pageNumber och ger värde 1

function findHash(){   // kolla om adressen har # och vilket värde det har
  let hash = window.location.hash
  if(hash != " "){
    let number = hash.substring(1);
    console.log(number);
    return number;
  } else {
    return undefined;
  }
}


function respons() {        //skapar funktionen respons omvandlar infon från openbrewerydb till ett objekt
//  console.log(this.responseText); //tex. strängen med objekt som vi hämtat
  console.log(this.status); // 200 = allt gick bra
  let parse = JSON.parse(this.responseText);
  if(Array.isArray(parse)) {
    createTable(parse);     //kalla på funktionen createTable och ckickar med parse-värdet
  }else {
    createTable([parse]);     //kalla på funktionen createTable och ckickar med parse-värdet
  }
}

function doRequest(){               //funktion doRequest ber om info från openbrewerydb.org
  let info = new XMLHttpRequest();
  info.addEventListener("load", respons);       //kalla på funktionen respons som omvandlar strängen till ett objekt
  let id = findHash();
  if(id === undefined){
    let page = "?page=" + pageNumber; //för att kunna hämta fler sidor när man trycker på next page-knappen
    info.open("GET", "https://api.openbrewerydb.org/breweries" + page); //+ page gör att vi byter sida vid klick på next-knappen
  } else {
    info.open("GET", "https://api.openbrewerydb.org/breweries/" + id);
  }
    info.send ();
}

let nextButton = document.getElementById('next');      //kalla på next-knappen
nextButton.addEventListener('click', increaseNumber);

let prevButton = document.getElementById('prev');   //kalla på Previuos-knappen
prevButton.addEventListener('click', previuosPage);

let body = document.querySelector('body');

function increaseNumber(){      //när man vill byta sida med knapptryck kallas denna funktion
  let table = document.querySelector('table');
  body.removeChild(table);    //För att det ska dyka upp nya tabeller vid knapptryck och inte hamna under varandra
  pageNumber++;
  doRequest();
}

function previuosPage(){   //gå tillbaks med knapptryck
  if(pageNumber > 1) {    //för att man inte ska kunna backa längre än till första sidan
    let table = document.querySelector('table');
    body.removeChild(table);
    pageNumber--;
    doRequest();
  }
}

function createTable(parse){
  let table = document.createElement('table');   // skapa en tabell
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  body.appendChild(table);                     //sätt dit tabellen
  table.appendChild(thead);
  table.appendChild(tbody);

  let keys = ['name', 'street', 'city', 'state', 'postal_code', 'country'];       //Vi hämtar ut vilka nycklar vi behöver

  let trH = document.createElement('tr');
  for(let key of keys){
    let th = document.createElement('th');
    th.textContent = key; //.charAt(0).toUpperCase() + key.split('_').join(' ').slice(1)
    trH.appendChild(th);
  }
  thead.appendChild(trH);

  for(let object of parse) {
    let trB = document.createElement('tr');
    for (let key of keys) {
      let td = document.createElement('td');
      td.textContent = object[key];
      trB.appendChild(td);
    }
    tbody.appendChild(trB)
  }
  document.body.appendChild(table);

  $('table').css({
    'border': '5px solid pink',
    'border-collapse': 'collapse',
  })

  $('td, th').css({
    'border': '1px solid pink',
    'padding': '2px',
  })
}

doRequest();

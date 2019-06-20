/*Gör ett AJAX anrop till https://api.openbrewerydb.org/breweries för att hämta en
array som innehåller information om bryggerier. Datan ni får är JSON formaterad,
så ni behöver parsa den.
Därefter rendera listan i er DOM som en tabell och visa minst namnet och adressen
för varje bryggeri i listan.
Notera att datan är identisk till i första övningen vi gjorde idag, så du kan bara
kopiera den logiken för att skapa tabellen.*/
//API Dokumentation: https:www.openbrewerydb.org

function request() {
  console.log(this.responseText);
  console.log(this.status);
  let parse = JSON.parse(this.responseText);
  createTable(parse);
}
function doRequest(){
  let info = new XMLHttpRequest();
  info.addEventListener("load", request);
  info.open("GET", "https://api.openbrewerydb.org/breweries");
  info.send ();
}


function createTable(parse){
  let body = document.querySelector('body');
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
    'padding': '5px',
  })

}

doRequest();

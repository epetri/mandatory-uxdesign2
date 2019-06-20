/*Skriv en funktion renderPlanets som tar en array med objekt som argument. Funktionen ska skapa en tabell som listar alla planeter givna i arrayen.
Skapa 3 kolumner där du visar allt i objektet förutom hur många månar planeterna har. Tabellen ska renderas i main elementet.*/

let main = document.querySelector('main');

function renderPlanets(array){
  let table = document.createElement('table');
  main.appendChild(table);

  let thead = document.createElement('thead');
  table.appendChild(thead);

  let tbody = document.createElement('tbody');
  table.appendChild(tbody);

  let tr = document.createElement('tr');
  let object = array[0];
  for (let key in object){
    if(key === 'name' || key === 'mass' || key === 'period'){
      let th = document.createElement('th');
      th.textContent = key;
      tr.appendChild(th)
    }
  }
  thead.appendChild(tr);

  for(let index in array) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    object = array[index];
    for(let key in object){
      if(key === 'name' || key === 'mass' || key === 'period'){
        let td = document.createElement('td');
        td.textContent = object[key];
        tr.appendChild(td);
      }
    }
  }
}

renderPlanets([
  {name: 'Mercury', mass:  0.06, period: 0.24, moons: 0},
  {name: 'Venus', mass: 0.82, period: 0.62, moons: 0},
  {name: 'Earth', mass: 1.0, period: 1.0, moons: 1},
  {name: 'Mars', mass: 0.11, period: 1.88, moons: 2},
  {name: 'Jupiter', mass: 317.8, period: 11.86, moons: 79},
  {name: 'Saturn', mass: 95.2, period: 29.46, moons: 62},
  {name: 'Uranus', mass: 14.6, period: 84.01, moons: 27},
  {name: 'Neptune', mass: 17.2, period: 164.8, moons: 14},
]);

let tableData = [
{name: 'Simba', animal: 'Lion'},
{name: 'Timon', animal: 'Meerkat'},
{name: 'Pumba', animal: 'warthog'}
]

let x = tableData[0];
let body = document.querySelector('body');
let table = document.createElement('table');
table.setAttribute('id', 'myTable');
body.appendChild(table);

let thead = document.createElement('thead');
thead.setAttribute('id', 'myThead');
table.appendChild(thead);

let tbody = document.createElement('tbody');
tbody.setAttribute('id', 'myTbody');
table.appendChild(tbody);

for(let y in x ){
  let th = document.createElement('th');
  th.textContent = y;
  thead.appendChild(th);
}

for(let i in tableData){
  let object = tableData[i];
  let tr = document.createElement('tr');


  for(let key in object){
    let td = document.createElement('td');
    td.textContent = object[key];
    tbody.appendChild(tr);
    tr.appendChild(td);
  }
}

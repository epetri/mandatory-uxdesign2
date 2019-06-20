let body = document.querySelector('body');

function arrayLoop(tableArray) {
 let table = document.createElement('table');
 body.appendChild(table);

 let thead = document.createElement('thead');
 table.appendChild(thead);

 let tbody = document.createElement('tbody');
 table.appendChild(tbody);


 let tr = document.createElement('tr');
 let object = tableArray[0];
 for (let key in object) {
 if (key === 'name' || key === 'city' || key === 'postal_code' || key === 'state' || key === 'country' ) {
   let th = document.createElement('th');
   th.textContent = key;
   tr.appendChild(th);
   }
 }
   thead.appendChild(tr);


 for (let index in tableArray) {
   let tr = document.createElement('tr');
   tbody.appendChild(tr);
   object = tableArray[index];
   for (let key in object) {
     if (key === 'name' || key === 'city' || key === 'postal_code' || key === 'state' || key === 'country' ) {
       let td = document.createElement('td');
       td.textContent = object[key];
       tr.appendChild(td);
     }
   }
 }
}
